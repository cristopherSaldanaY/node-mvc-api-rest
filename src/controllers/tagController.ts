import { Request, Response } from "express";
import { TagService } from "../services/tagService";

export class TagController {
  constructor(private readonly tagService: TagService) {}

  public createTag = async (req: Request, res: Response): Promise<void> => {
    try {
      const tag = await this.tagService.createTag(req.body);
      res.status(201).send(tag);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getTags = async (req: Request, res: Response): Promise<void> => {
    try {
      const tags = await this.tagService.getTags();
      res.status(200).send(tags);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public getTag = async (req: Request, res: Response): Promise<void> => {
    try {
      const tag = await this.tagService.getTag(parseInt(req.params.id));
      if (!tag) {
        res.status(404).send("Tag not found");
      } else {
        res.status(200).send(tag);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public updateTag = async (req: Request, res: Response): Promise<void> => {
    try {
      const tag = await this.tagService.updateTag(parseInt(req.params.id), req.body);
      if (!tag) {
        res.status(404).send("Tag not found");
      } else {
        res.status(200).send(tag);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  public deleteTag = async (req: Request, res: Response): Promise<void> => {
    try {
      const tag = await this.tagService.deleteTag(parseInt(req.params.id));
      if (!tag) {
        res.status(404).send("Tag not found");
      } else {
        res.status(200).send("Tag deleted");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
}
