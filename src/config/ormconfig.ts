import { DataSource } from "typeorm";
import { User } from "../models/User";
import { Project } from "../models/Project";
import { Task } from "../models/Task";
import { Tag } from "../models/Tag";
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3314,
  username: "adminUser",
  password: "root",
  database: "bddnodemvc",
  logging: true,
  entities: [User, Project, Task, Tag],
  synchronize: true,
  migrations: [],
  subscribers: [],
});

