"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const Task_1 = require("../models/Task");
const ormconfig_1 = require("../config/ormconfig");
class TaskRepository {
    constructor() {
        this.createTask = async (task) => {
            return this.repository.save(task);
        };
        this.getTasks = async () => {
            return this.repository.find({ relations: ["project", "user", "tags"] });
        };
        this.getTask = async (id) => {
            return this.repository.findOne({
                where: { id },
                relations: ["project", "user", "tags"],
            });
        };
        this.updateTask = async (id, taskData) => {
            let task = await this.repository.findOneBy({ id });
            if (!task) {
                return null;
            }
            task = this.repository.merge(task, taskData);
            return this.repository.save(task);
        };
        this.deleteTask = async (id) => {
            const task = await this.repository.findOneBy({ id });
            if (!task) {
                return null;
            }
            return this.repository.remove(task);
        };
        this.repository = ormconfig_1.AppDataSource.getRepository(Task_1.Task);
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=taskRepository.js.map