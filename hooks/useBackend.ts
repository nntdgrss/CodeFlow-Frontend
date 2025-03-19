import { Project } from '@/types/api.types'
import { useSession } from 'next-auth/react'

interface ProjectsResponse {
	projects: Project[]
}

// Типы ошибок API
export enum ApiError {
	UNAUTHORIZED = 'UNAUTHORIZED',
	NOT_FOUND = 'NOT_FOUND',
	VALIDATION = 'VALIDATION',
	SERVER_ERROR = 'SERVER_ERROR',
	NETWORK_ERROR = 'NETWORK_ERROR',
	UNKNOWN = 'UNKNOWN',
}

// Класс для работы с API (Singleton)
class ApiService {
	private static instance: ApiService
	private baseUrl: string

	private constructor() {
		this.baseUrl = 'http://localhost:3001/v0'
	}

	public static getInstance(): ApiService {
		if (!ApiService.instance) {
			ApiService.instance = new ApiService()
		}
		return ApiService.instance
	}

	private buildUrl(endpoint: string): string {
		return `${this.baseUrl}${
			endpoint.startsWith('/') ? endpoint : `/${endpoint}`
		}`
	}

	private async handleResponse<T>(response: Response): Promise<T> {
		if (!response.ok) {
			switch (response.status) {
				case 401:
					throw new Error(ApiError.UNAUTHORIZED)
				case 404:
					throw new Error(ApiError.NOT_FOUND)
				case 422:
					throw new Error(ApiError.VALIDATION)
				case 500:
					throw new Error(ApiError.SERVER_ERROR)
				default:
					throw new Error(ApiError.UNKNOWN)
			}
		}

		return response.json()
	}

	async get<T>(endpoint: string, token?: string): Promise<T> {
		try {
			const response = await fetch(this.buildUrl(endpoint), {
				headers: {
					'Content-Type': 'application/json',
					...(token && { Authorization: `Bearer ${token}` }),
				},
			})
			return this.handleResponse<T>(response)
		} catch (error) {
			if (error instanceof Error) {
				throw error
			}
			throw new Error(ApiError.NETWORK_ERROR)
		}
	}

	async post<T>(endpoint: string, data: any, token?: string): Promise<T> {
		try {
			const response = await fetch(this.buildUrl(endpoint), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(token && { Authorization: `Bearer ${token}` }),
				},
				body: JSON.stringify(data),
			})
			return this.handleResponse<T>(response)
		} catch (error) {
			if (error instanceof Error) {
				throw error
			}
			throw new Error(ApiError.NETWORK_ERROR)
		}
	}

	async put<T>(endpoint: string, data: any, token?: string): Promise<T> {
		try {
			const response = await fetch(this.buildUrl(endpoint), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					...(token && { Authorization: `Bearer ${token}` }),
				},
				body: JSON.stringify(data),
			})
			return this.handleResponse<T>(response)
		} catch (error) {
			if (error instanceof Error) {
				throw error
			}
			throw new Error(ApiError.NETWORK_ERROR)
		}
	}

	async delete(endpoint: string, token?: string): Promise<void> {
		try {
			const response = await fetch(this.buildUrl(endpoint), {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					...(token && { Authorization: `Bearer ${token}` }),
				},
			})
			await this.handleResponse<void>(response)
		} catch (error) {
			if (error instanceof Error) {
				throw error
			}
			throw new Error(ApiError.NETWORK_ERROR)
		}
	}
}

// Функция для парсинга ошибок
const parseError = (error: unknown): ApiError => {
	if (error instanceof Error) {
		switch (error.message as ApiError) {
			case ApiError.UNAUTHORIZED:
			case ApiError.NOT_FOUND:
			case ApiError.VALIDATION:
			case ApiError.SERVER_ERROR:
			case ApiError.NETWORK_ERROR:
				return error.message as ApiError
			default:
				return ApiError.UNKNOWN
		}
	}
	return ApiError.UNKNOWN
}

// Хук для работы с API
export function useBackend() {
	const api = ApiService.getInstance()
	const { data: session } = useSession()

	// Базовая функция для обработки запросов
	const handleRequest = async <T>(
		operation: () => Promise<T>
	): Promise<[T | null, ApiError | null]> => {
		try {
			const result = await operation()
			return [result, null]
		} catch (error) {
			return [null, parseError(error)]
		}
	}

	return {
		// Универсальные CRUD методы
		get: <T>(endpoint: string) =>
			handleRequest<T>(() => api.get<T>(endpoint, session?.accessToken)),

		post: <T>(endpoint: string, data: any) =>
			handleRequest<T>(() => api.post<T>(endpoint, data, session?.accessToken)),

		put: <T>(endpoint: string, data: any) =>
			handleRequest<T>(() => api.put<T>(endpoint, data, session?.accessToken)),

		delete: (endpoint: string) =>
			handleRequest(() => api.delete(endpoint, session?.accessToken)),

		// Специализированные методы
		getProjects: () =>
			handleRequest<ProjectsResponse>(() =>
				api.get('/projects', session?.accessToken)
			),

		createProject: (data: { name: string; description: string }) =>
			handleRequest(() => api.post('/projects', data, session?.accessToken)),

		updateProject: (
			id: string,
			data: { name?: string; description?: string }
		) =>
			handleRequest(() =>
				api.put(`/projects/${id}`, data, session?.accessToken)
			),

		deleteProject: (id: string) =>
			handleRequest(() => api.delete(`/projects/${id}`, session?.accessToken)),
	}
}
