import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Project } from "./Project";
import { Task } from "./Task";
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column({default: true})
  isActive: boolean

  @ManyToMany(() => Project, project => project.users)
  @JoinTable()
  projects: Project[];

  @OneToMany(() => Task, task => task.user)
  tasks: Task[];
}
