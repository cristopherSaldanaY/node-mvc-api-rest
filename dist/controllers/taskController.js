"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
        this.createTask = async (req, res) => {
            try {
                const task = await this.taskService.createTask(req.body);
                res.status(201).send(task);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getTasks = async (req, res) => {
            try {
                const tasks = await this.taskService.getTasks();
                res.status(200).send(tasks);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getTask = async (req, res) => {
            try {
                const task = await this.taskService.getTask(parseInt(req.params.id));
                if (!task) {
                    res.status(404).send("Task not found");
                }
                else {
                    res.status(200).send(task);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.updateTask = async (req, res) => {
            try {
                const task = await this.taskService.updateTask(parseInt(req.params.id), req.body);
                if (!task) {
                    res.status(404).send("Task not found");
                }
                else {
                    res.status(200).send(task);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.deleteTask = async (req, res) => {
            try {
                const task = await this.taskService.deleteTask(parseInt(req.params.id));
                if (!task) {
                    res.status(404).send("Task not found");
                }
                else {
                    res.status(200).send("Task deleted");
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=taskController.js.map