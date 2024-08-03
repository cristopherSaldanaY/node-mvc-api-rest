"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
        this.createTask = async (taskData) => {
            return this.taskRepository.createTask(taskData);
        };
        this.getTasks = async () => {
            return this.taskRepository.getTasks();
        };
        this.getTask = async (id) => {
            return this.taskRepository.getTask(id);
        };
        this.updateTask = async (id, taskData) => {
            return this.taskRepository.updateTask(id, taskData);
        };
        this.deleteTask = async (id) => {
            return this.taskRepository.deleteTask(id);
        };
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=taskService.js.map