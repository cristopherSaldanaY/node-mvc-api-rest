"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userDto_1 = require("../dtos/userDto");
const class_validator_1 = require("class-validator");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.createUser = async (req, res) => {
            const createUserDto = new userDto_1.CreateUserDto();
            Object.assign(createUserDto, req.body);
            const errors = await (0, class_validator_1.validate)(createUserDto);
            if (errors.length > 0) {
                res.status(400).json(errors);
            }
            try {
                const user = await this.userService.createUser(createUserDto);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        };
        this.getUsers = async (req, res) => {
            try {
                const users = await this.userService.getUsers();
                res.status(200).send(users);
            }
            catch (error) {
                res.status(500).send(error.message);
                console.log(error);
            }
        };
        this.getUser = async (req, res) => {
            try {
                const user = await this.userService.getUser(req.params.id);
                if (!user) {
                    return res.status(404).send("User not found");
                }
                res.status(200).send(user);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        };
        this.updateUser = async (req, res) => {
            const updateUserDto = new userDto_1.UpdateUserDto();
            Object.assign(updateUserDto, req.body);
            const errors = await (0, class_validator_1.validate)(updateUserDto);
            if (errors.length > 0) {
                res.status(400).json(errors);
            }
            try {
                const user = await this.userService.updateUser(req.params.id, req.body);
                if (!user) {
                    return res.status(404).send("User not found");
                }
                res.status(200).send(user);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        };
        this.deleteUser = async (req, res) => {
            try {
                const user = await this.userService.deleteUser((req.params.id));
                if (!user) {
                    return res.status(404).send("User not found");
                }
                res.status(200).send("User deleted");
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map