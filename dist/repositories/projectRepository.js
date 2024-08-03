"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const Project_1 = require("../models/Project");
const ormconfig_1 = require("../config/ormconfig");
class ProjectRepository {
    constructor() {
        this.createProject = async (project) => {
            return this.repository.save(project);
        };
        this.getProjects = async () => {
            return this.repository.find();
        };
        this.getProject = async (id) => {
            return this.repository.findOneBy({ id });
        };
        this.updateProject = async (id, projectData) => {
            let project = await this.repository.findOneBy({ id });
            if (!project) {
                return null;
            }
            project = this.repository.merge(project, projectData);
            return this.repository.save(project);
        };
        this.deleteProject = async (id) => {
            const project = await this.repository.findOneBy({ id });
            if (!project) {
                return null;
            }
            return this.repository.remove(project);
        };
        this.repository = ormconfig_1.AppDataSource.getRepository(Project_1.Project);
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=projectRepository.js.map