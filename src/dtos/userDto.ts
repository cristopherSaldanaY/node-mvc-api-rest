import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
	@IsString()
	name: string

	@IsEmail()
	email: string
}

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	name?: string

	@IsOptional()
	@IsEmail()
	email?: string

	@IsOptional()
	@IsBoolean()
	isActive?: boolean
}
