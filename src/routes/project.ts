import { Router } from "express";
import { ProjectController } from "../controllers/projectController";
import { ProjectService } from "../services/projectService";
import { ProjectRepository } from "../repositories/projectRepository";

const router = Router();
const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

export { router as projectRouter };
