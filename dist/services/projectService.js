"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
        this.createProject = async (projectData) => {
            return this.projectRepository.createProject(projectData);
        };
        this.getProjects = async () => {
            return this.projectRepository.getProjects();
        };
        this.getProject = async (id) => {
            return this.projectRepository.getProject(id);
        };
        this.updateProject = async (id, projectData) => {
            return this.projectRepository.updateProject(id, projectData);
        };
        this.deleteProject = async (id) => {
            return this.projectRepository.deleteProject(id);
        };
    }
}
exports.ProjectService = ProjectService;
//# sourceMappingURL=projectService.js.map