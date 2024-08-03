import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User";
import { Task } from "./Task";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => User, user => user.projects)
  users: User[];

  @OneToMany(() => Task, task => task.project)
  tasks: Task[];
}
