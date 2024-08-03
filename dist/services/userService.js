"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.createUser = async (userData) => {
            return this.userRepository.createUser(userData);
        };
        this.getUsers = async () => {
            return this.userRepository.getUsers();
        };
        this.getUser = async (id) => {
            return this.userRepository.getUser(id);
        };
        this.updateUser = async (id, userData) => {
            return this.userRepository.updateUser(id, userData);
        };
        this.deleteUser = async (id) => {
            return this.userRepository.deleteUser(id);
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map