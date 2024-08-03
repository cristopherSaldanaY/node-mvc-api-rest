import { Request, Response } from "express";
import { ProjectService } from "../services/projectService";

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  public createProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await this.projectService.createProject(req.body);
      res.status(201).send(project);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
      const projects = await this.projectService.getProjects();
      res.status(200).send(projects);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await this.projectService.getProject(
        parseInt(req.params.id)
      );
      if (!project) {
        res.status(404).send("Project not found");
      } else {
        res.status(200).send(project);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public updateProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await this.projectService.updateProject(
        parseInt(req.params.id),
        req.body
      );
      if (!project) {
        res.status(404).send("Project not found");
      } else {
        res.status(200).send(project);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public deleteProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await this.projectService.deleteProject(
        parseInt(req.params.id)
      );
      if (!project) {
        res.status(404).send("Project not found");
      } else {
        res.status(200).send("Project deleted");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
}
