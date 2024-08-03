import { ProjectRepository } from "../repositories/projectRepository";
import { Project } from "../models/Project";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public createProject = async (
    projectData: Partial<Project>
  ): Promise<Project> => {
    return this.projectRepository.createProject(projectData);
  };

  public getProjects = async (): Promise<Project[]> => {
    return this.projectRepository.getProjects();
  };

  public getProject = async (id: number): Promise<Project | null> => {
    return this.projectRepository.getProject(id);
  };

  public updateProject = async (
    id: number,
    projectData: Partial<Project>
  ): Promise<Project | null> => {
    return this.projectRepository.updateProject(id, projectData);
  };

  public deleteProject = async (id: number): Promise<Project | null> => {
    return this.projectRepository.deleteProject(id);
  };
}
