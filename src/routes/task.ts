import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { TaskService } from "../services/taskService";
import { TaskRepository } from "../repositories/taskRepository";

const router = Router();
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export { router as taskRouter };
