import { Repository } from "typeorm";
import { Project } from "../models/Project";
import { AppDataSource } from "../config/ormconfig";

export class ProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }

  public createProject = async (project: Partial<Project>): Promise<Project> => {
    return this.repository.save(project);
  };

  public getProjects = async (): Promise<Project[]> => {
    return this.repository.find();
  };

  public getProject = async (id: number): Promise<Project | null> => {
    return this.repository.findOneBy({ id });
  };

  public updateProject = async (id: number, projectData: Partial<Project>): Promise<Project | null> => {
    let project = await this.repository.findOneBy({ id });
    if (!project) {
      return null;
    }
    project = this.repository.merge(project, projectData);
    return this.repository.save(project);
  };

  public deleteProject = async (id: number): Promise<Project | null> => {
    const project = await this.repository.findOneBy({ id });
    if (!project) {
      return null;
    }
    return this.repository.remove(project);
  };
}
