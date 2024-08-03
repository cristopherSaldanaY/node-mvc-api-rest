"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const projectService_1 = require("../services/projectService");
const projectRepository_1 = require("../repositories/projectRepository");
const router = (0, express_1.Router)();
exports.projectRouter = router;
const projectRepository = new projectRepository_1.ProjectRepository();
const projectService = new projectService_1.ProjectService(projectRepository);
const projectController = new projectController_1.ProjectController(projectService);
router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);
//# sourceMappingURL=project.js.map