"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
        this.createProject = async (req, res) => {
            try {
                const project = await this.projectService.createProject(req.body);
                res.status(201).send(project);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getProjects = async (req, res) => {
            try {
                const projects = await this.projectService.getProjects();
                res.status(200).send(projects);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getProject = async (req, res) => {
            try {
                const project = await this.projectService.getProject(parseInt(req.params.id));
                if (!project) {
                    res.status(404).send("Project not found");
                }
                else {
                    res.status(200).send(project);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.updateProject = async (req, res) => {
            try {
                const project = await this.projectService.updateProject(parseInt(req.params.id), req.body);
                if (!project) {
                    res.status(404).send("Project not found");
                }
                else {
                    res.status(200).send(project);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.deleteProject = async (req, res) => {
            try {
                const project = await this.projectService.deleteProject(parseInt(req.params.id));
                if (!project) {
                    res.status(404).send("Project not found");
                }
                else {
                    res.status(200).send("Project deleted");
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
    }
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=projectController.js.map