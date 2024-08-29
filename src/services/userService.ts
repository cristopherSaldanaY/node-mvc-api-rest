import { UserRepository } from '../repositories/userRepository'
import { User } from '../models/User'
import { UserResponseDto } from '../dtos/userResponseDto'
import { AppError } from '../errors/AppError'

export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public createUser = async (userData: Partial<User>): Promise<User> => {
		try {
			return this.userRepository.createUser(userData)
		} catch (error) {
			throw new AppError('Error creating user', 500)
		}
	}

	public getUsers = async (): Promise<UserResponseDto[]> => {
		try {
			const users = await this.userRepository.getUsers()
			return users.map(user => ({
				id: user.id,
				name: user.name,
				email: user.email,
			}))
		} catch (error) {
			throw new AppError('Error fetching users', 500)
		}
	}

	public getUser = async (id: string): Promise<UserResponseDto | null> => {
		try {
			console.log('id del user', id)
			const user = await this.userRepository.getUser(id)
			console.log('el usuario o no', user)
			if (user === null) {
				throw new AppError('User not found', 404)
			}
			return {
				id: user.id,
				name: user.name,
				email: user.email,
			}
		} catch (error) {
			if (error instanceof AppError) {
				throw error
			}
			console.error('Unexpected error fetching user:', error)
			throw new AppError('Error fetching user', 500)
		}
	}

	public updateUser = async (id: string, userData: Partial<User>): Promise<User | null> => {
		try {
			return this.userRepository.updateUser(id, userData)
		} catch (error) {
			throw new AppError('Error updating user', 500)
		}
	}

	public deleteUser = async (id: string): Promise<User | null> => {
		try {
			return this.userRepository.deleteUser(id)
		} catch (error) {
			throw new AppError('Error deleting user', 500)
		}
	}
}
