"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRouter = void 0;
const express_1 = require("express");
const tagController_1 = require("../controllers/tagController");
const tagService_1 = require("../services/tagService");
const tagRepository_1 = require("../repositories/tagRepository");
const router = (0, express_1.Router)();
exports.tagRouter = router;
const tagRepository = new tagRepository_1.TagRepository();
const tagService = new tagService_1.TagService(tagRepository);
const tagController = new tagController_1.TagController(tagService);
router.post("/", tagController.createTag);
router.get("/", tagController.getTags);
router.get("/:id", tagController.getTag);
router.put("/:id", tagController.updateTag);
router.delete("/:id", tagController.deleteTag);
//# sourceMappingURL=tag.js.map