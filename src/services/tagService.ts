import { TagRepository } from "../repositories/tagRepository";
import { Tag } from "../models/Tag";

export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  public createTag = async (tagData: Partial<Tag>): Promise<Tag> => {
    return this.tagRepository.createTag(tagData);
  };

  public getTags = async (): Promise<Tag[]> => {
    return this.tagRepository.getTags();
  };

  public getTag = async (id: number): Promise<Tag | null> => {
    return this.tagRepository.getTag(id);
  };

  public updateTag = async (id: number, tagData: Partial<Tag>): Promise<Tag | null> => {
    return this.tagRepository.updateTag(id, tagData);
  };

  public deleteTag = async (id: number): Promise<Tag | null> => {
    return this.tagRepository.deleteTag(id);
  };
}
