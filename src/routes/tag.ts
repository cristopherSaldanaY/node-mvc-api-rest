import { Router } from "express";
import { TagController } from "../controllers/tagController";
import { TagService } from "../services/tagService";
import { TagRepository } from "../repositories/tagRepository";

const router = Router();
const tagRepository = new TagRepository();
const tagService = new TagService(tagRepository);
const tagController = new TagController(tagService);

router.post("/", tagController.createTag);
router.get("/", tagController.getTags);
router.get("/:id", tagController.getTag);
router.put("/:id", tagController.updateTag);
router.delete("/:id", tagController.deleteTag);

export { router as tagRouter };
