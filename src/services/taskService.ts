import { TaskRepository } from "../repositories/taskRepository";
import { Task } from "../models/Task";

export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  public createTask = async (taskData: Partial<Task>): Promise<Task> => {
    return this.taskRepository.createTask(taskData);
  };

  public getTasks = async (): Promise<Task[]> => {
    return this.taskRepository.getTasks();
  };

  public getTask = async (id: number): Promise<Task | null> => {
    return this.taskRepository.getTask(id);
  };

  public updateTask = async (id: number, taskData: Partial<Task>): Promise<Task | null> => {
    return this.taskRepository.updateTask(id, taskData);
  };

  public deleteTask = async (id: number): Promise<Task | null> => {
    return this.taskRepository.deleteTask(id);
  };
}
