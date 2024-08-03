import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { CreateUserDto, UpdateUserDto } from "../dtos/userDto";
import { validate } from "class-validator";

export class UserController {
  constructor(private readonly userService: UserService) {}

  public createUser = async (req: Request, res: Response): Promise<void> => {

    const createUserDto = new CreateUserDto()
    Object.assign(createUserDto, req.body)

    const errors = await validate(createUserDto)

    if(errors.length > 0){
      res.status(400).json(errors)
    }

    try {
      const user = await this.userService.createUser(createUserDto);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  };

  public getUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUser(req.params.id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  public updateUser = async (req: Request, res: Response) => {

    const updateUserDto = new UpdateUserDto()
    Object.assign(updateUserDto, req.body)

    const errors = await validate(updateUserDto)
    if(errors.length > 0){
      res.status(400).json(errors)
    }
    
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);

      if (!user) {
        return res.status(404).send("User not found");
      }

      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.deleteUser((req.params.id));

      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User deleted");
    } catch (error) {
      res.status(500).send(error.message)
    }
  };
}
