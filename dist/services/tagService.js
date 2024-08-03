"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
        this.createTag = async (tagData) => {
            return this.tagRepository.createTag(tagData);
        };
        this.getTags = async () => {
            return this.tagRepository.getTags();
        };
        this.getTag = async (id) => {
            return this.tagRepository.getTag(id);
        };
        this.updateTag = async (id, tagData) => {
            return this.tagRepository.updateTag(id, tagData);
        };
        this.deleteTag = async (id) => {
            return this.tagRepository.deleteTag(id);
        };
    }
}
exports.TagService = TagService;
//# sourceMappingURL=tagService.js.map