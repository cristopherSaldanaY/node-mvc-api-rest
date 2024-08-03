import "reflect-metadata";
import { AppDataSource } from "../config/ormconfig";
import { User } from "../models/User";
import { Project } from "../models/Project";
import { Task } from "../models/Task";
import { Tag } from "../models/Tag";
import { v4 as uuidv4 } from 'uuid';

const seedData = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const projectRepository = AppDataSource.getRepository(Project);
  const taskRepository = AppDataSource.getRepository(Task);
  const tagRepository = AppDataSource.getRepository(Tag);

  const users = [
    { id: uuidv4(), name: "Admin User", email: "admin@example.com", isActive: true },
    { id: uuidv4(), name: "John Doe", email: "john.doe@example.com", isActive: true },
  ];
  await userRepository.save(users);

  const projects = [
    { name: "Project Alpha", description: "First project description" },
    { name: "Project Beta", description: "Second project description" },
  ];
  await projectRepository.save(projects);

  const tags = [{ name: "Urgent" }, { name: "In Progress" }];
  await tagRepository.save(tags);

  const [savedUsers, savedProjects, savedTags] = await Promise.all([
    userRepository.find(),
    projectRepository.find(),
    tagRepository.find(),
  ]);

  const tasks = [
    {
      title: "Task 1",
      description: "Description for task 1",
      dueDate: new Date(),
      status: "Pending",
      project: savedProjects[0],
      user: savedUsers[0],
      tags: [savedTags[0]],
    },
    {
      title: "Task 2",
      description: "Description for task 2",
      dueDate: new Date(),
      status: "In Progress",
      project: savedProjects[1],
      user: savedUsers[1],
      tags: [savedTags[1]],
    },
  ];
  await taskRepository.save(tasks);

  console.log("Seed data inserted successfully");
};

AppDataSource.initialize()
  .then(async () => {
    await seedData();
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
    process.exit(1);
  });
