import { Repository } from "typeorm";
import { Tag } from "../models/Tag";
import { AppDataSource } from "../config/ormconfig";

export class TagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = AppDataSource.getRepository(Tag);
  }

  public createTag = async (tag: Partial<Tag>): Promise<Tag> => {
    return this.repository.save(tag);
  };

  public getTags = async (): Promise<Tag[]> => {
    return this.repository.find();
  };

  public getTag = async (id: number): Promise<Tag | null> => {
    return this.repository.findOneBy({ id });
  };

  public updateTag = async (
    id: number,
    tagData: Partial<Tag>
  ): Promise<Tag | null> => {
    let tag = await this.repository.findOneBy({ id });
    if (!tag) {
      return null;
    }
    tag = this.repository.merge(tag, tagData);
    return this.repository.save(tag);
  };

  public deleteTag = async (id: number): Promise<Tag | null> => {
    const tag = await this.repository.findOneBy({ id });
    if (!tag) {
      return null;
    }
    return this.repository.remove(tag);
  };
}
