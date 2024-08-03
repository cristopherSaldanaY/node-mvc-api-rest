"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../models/User");
const ormconfig_1 = require("../config/ormconfig");
class UserRepository {
    constructor() {
        this.createUser = async (user) => {
            return this.repository.save(user);
        };
        this.getUsers = async () => {
            return this.repository.find();
        };
        this.getUser = async (id) => {
            return this.repository.findOneBy({ id });
        };
        this.updateUser = async (id, userData) => {
            let user = await this.repository.findOneBy({ id });
            if (!user) {
                return null;
            }
            user = this.repository.merge(user, userData);
            return this.repository.save(user);
        };
        this.deleteUser = async (id) => {
            const user = await this.repository.findOneBy({ id });
            if (!user) {
                return null;
            }
            user.isActive = false;
            return this.repository.save(user);
        };
        this.repository = ormconfig_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map