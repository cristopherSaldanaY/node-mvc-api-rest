import { NextFunction, Request, Response } from 'express'
import { UserService } from '../services/userService'
import { CreateUserDto, UpdateUserDto } from '../dtos/userDto'
import { validate } from 'class-validator'
import { AppError } from '../errors/AppError'

export class UserController {
	constructor(private readonly userService: UserService) {}

	public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const createUserDto = new CreateUserDto()
		Object.assign(createUserDto, req.body)

		const errors = await validate(createUserDto)

		if (errors.length > 0) {
			return next(new AppError('Validation failed', 400))
		}

		try {
			const user = await this.userService.createUser(createUserDto)
			res.status(201).json(user)
		} catch (error) {
			if (error.code === 'ER_DUP_ENTRY') {
				return next(new AppError('Email already in use', 400))
			}
			next(new AppError(error.message, 500))
		}
	}

	public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const users = await this.userService.getUsers()
			res.status(200).send(users)
		} catch (error) {
			next(new AppError(error.message, 500))
		}
	}

	public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = await this.userService.getUser(req.params.id)
			if (!user) {
				return next(new AppError('User not found', 404))
			}
			res.status(200).send(user)
		} catch (error) {
			next(new AppError(error.message, 500))
		}
	}

	public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const updateUserDto = new UpdateUserDto()
		Object.assign(updateUserDto, req.body)

		const errors = await validate(updateUserDto)
		if (errors.length > 0) {
			return next(new AppError('Validation failed', 400))
		}

		try {
			const user = await this.userService.updateUser(req.params.id, updateUserDto)
			if (!user) {
				return next(new AppError('User not found', 404))
			}
			res.status(200).send(user)
		} catch (error) {
			next(new AppError(error.message, 500))
		}
	}

	public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = await this.userService.deleteUser(req.params.id)
			if (!user) {
				return next(new AppError('User not found', 404))
			}
			res.status(200).send('User deleted')
		} catch (error) {
			next(new AppError(error.message, 500))
		}
	}
}
