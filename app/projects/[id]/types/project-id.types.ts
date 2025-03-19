export type FetchProjectType = {
	id: string
	name: string
	description: string
	ownerId: string
	createdAt: string
	updatedAt: string
}

export type FetchProjectResponse = {
	project: FetchProjectType
}
