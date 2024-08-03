import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Project } from "./Project";
import { User } from "./User";
import { Tag } from "./Tag";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column()
  status: string;

  @ManyToOne(() => Project, project => project.tasks)
  project: Project;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @ManyToMany(() => Tag, tag => tag.tasks)
  @JoinTable()
  tags: Tag[];
}
