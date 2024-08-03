import { UserRepository } from '../repositories/userRepository'
import { User } from '../models/User'
import { UserResponseDto } from 'src/dtos/userResponseDto'

export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public createUser = async (userData: Partial<User>): Promise<User> => {
		return this.userRepository.createUser(userData)
	}

	public getUsers = async (): Promise<UserResponseDto[]> => {
		const users = await this.userRepository.getUsers()
		return users.map(user => ({
			id: user.id,
			name: user.name,
			email: user.email,
		}))
	}

	public getUser = async (id: string): Promise<UserResponseDto | null> => {
		const user = await  this.userRepository.getUser(id)
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
	}

	public updateUser = async (id: string, userData: Partial<User>): Promise<User | null> => {
		return this.userRepository.updateUser(id, userData)
	}

	public deleteUser = async (id: string): Promise<User | null> => {
		return this.userRepository.deleteUser(id)
	}
}
