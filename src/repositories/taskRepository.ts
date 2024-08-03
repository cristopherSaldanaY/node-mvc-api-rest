import { Repository } from "typeorm";
import { Task } from "../models/Task";
import { AppDataSource } from "../config/ormconfig";

export class TaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  public createTask = async (task: Partial<Task>): Promise<Task> => {
    return this.repository.save(task);
  };

  public getTasks = async (): Promise<Task[]> => {
    return this.repository.find({ relations: ["project", "user", "tags"] });
  };

  public getTask = async (id: number): Promise<Task | null> => {
    return this.repository.findOne({
      where: { id },
      relations: ["project", "user", "tags"],
    });
  };

  public updateTask = async (
    id: number,
    taskData: Partial<Task>
  ): Promise<Task | null> => {
    let task = await this.repository.findOneBy({ id });
    if (!task) {
      return null;
    }
    task = this.repository.merge(task, taskData);
    return this.repository.save(task);
  };

  public deleteTask = async (id: number): Promise<Task | null> => {
    const task = await this.repository.findOneBy({ id });
    if (!task) {
      return null;
    }
    return this.repository.remove(task);
  };
}
