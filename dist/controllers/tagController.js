"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
class TagController {
    constructor(tagService) {
        this.tagService = tagService;
        this.createTag = async (req, res) => {
            try {
                const tag = await this.tagService.createTag(req.body);
                res.status(201).send(tag);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getTags = async (req, res) => {
            try {
                const tags = await this.tagService.getTags();
                res.status(200).send(tags);
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.getTag = async (req, res) => {
            try {
                const tag = await this.tagService.getTag(parseInt(req.params.id));
                if (!tag) {
                    res.status(404).send("Tag not found");
                }
                else {
                    res.status(200).send(tag);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.updateTag = async (req, res) => {
            try {
                const tag = await this.tagService.updateTag(parseInt(req.params.id), req.body);
                if (!tag) {
                    res.status(404).send("Tag not found");
                }
                else {
                    res.status(200).send(tag);
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
        this.deleteTag = async (req, res) => {
            try {
                const tag = await this.tagService.deleteTag(parseInt(req.params.id));
                if (!tag) {
                    res.status(404).send("Tag not found");
                }
                else {
                    res.status(200).send("Tag deleted");
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        };
    }
}
exports.TagController = TagController;
//# sourceMappingURL=tagController.js.map