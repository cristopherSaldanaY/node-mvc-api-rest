import { Repository } from 'typeorm'
import { User } from '../models/User'
import { AppDataSource } from '../config/ormconfig'

export class UserRepository {
	private repository: Repository<User>

	constructor() {
		this.repository = AppDataSource.getRepository(User)
	}

	public createUser = async (user: Partial<User>): Promise<User> => {
		return this.repository.save(user)
	}

	public getUsers = async (): Promise<User[]> => {
		return this.repository.find({ where: { isActive: true } })
	}

	public getUser = async (id: string): Promise<User | null> => {
		return this.repository.findOne({ where: { id, isActive: true } })
	}

	public updateUser = async (id: string, userData: Partial<User>): Promise<User | null> => {
		let user = await this.repository.findOneBy({ id })
		if (!user) {
			return null
		}
		user = this.repository.merge(user, userData)
		return this.repository.save(user)
	}

	public deleteUser = async (id: string): Promise<User | null> => {
		const user = await this.repository.findOneBy({ id })
		if (!user) {
			return null
		}
		user.isActive = false
		return this.repository.save(user)
	}
}
