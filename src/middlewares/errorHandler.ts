import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		// Error controlado
		res.status(err.statusCode).json({
			status: 'error',
			message: err.message,
		})
	} else {
		// Error no controlado
		console.error('UNCAUGHT ERROR', err)
		res.status(500).json({
			status: 'error',
			message: 'Something went wrong',
		})
	}
}
