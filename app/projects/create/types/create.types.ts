/**
 * Represents a project entity
 */
export interface Project {
	/** Unique identifier for the project */
	id: string

	/** ID of the user who owns this project */
	ownerId: string

	/** Name of the project */
	name: string

	/** Description of the project */
	description: string

	/** Date when the project was created */
	createdAt: string

	/** Date when the project was last updated */
	updatedAt: string
}

/**
 * Shape of the project response object
 */
export interface ProjectResponse {
	project: Project
}

/**
 * Data required to create a new project
 */
export interface CreateProjectDto {
	name: string
	description: string
}
