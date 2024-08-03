import { Request, Response } from "express";
import { TaskService } from "../services/taskService";

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  public createTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const task = await this.taskService.createTask(req.body);
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks = await this.taskService.getTasks();
      res.status(200).send(tasks);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const task = await this.taskService.getTask(parseInt(req.params.id));
      if (!task) {
        res.status(404).send("Task not found");
      } else {
        res.status(200).send(task);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const task = await this.taskService.updateTask(parseInt(req.params.id), req.body);
      if (!task) {
        res.status(404).send("Task not found");
      } else {
        res.status(200).send(task);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const task = await this.taskService.deleteTask(parseInt(req.params.id));
      if (!task) {
        res.status(404).send("Task not found");
      } else {
        res.status(200).send("Task deleted");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
}
