"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const taskService_1 = require("../services/taskService");
const taskRepository_1 = require("../repositories/taskRepository");
const router = (0, express_1.Router)();
exports.taskRouter = router;
const taskRepository = new taskRepository_1.TaskRepository();
const taskService = new taskService_1.TaskService(taskRepository);
const taskController = new taskController_1.TaskController(taskService);
router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
//# sourceMappingURL=task.js.map