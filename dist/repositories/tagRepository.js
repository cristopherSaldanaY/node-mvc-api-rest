"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepository = void 0;
const Tag_1 = require("../models/Tag");
const ormconfig_1 = require("../config/ormconfig");
class TagRepository {
    constructor() {
        this.createTag = async (tag) => {
            return this.repository.save(tag);
        };
        this.getTags = async () => {
            return this.repository.find();
        };
        this.getTag = async (id) => {
            return this.repository.findOneBy({ id });
        };
        this.updateTag = async (id, tagData) => {
            let tag = await this.repository.findOneBy({ id });
            if (!tag) {
                return null;
            }
            tag = this.repository.merge(tag, tagData);
            return this.repository.save(tag);
        };
        this.deleteTag = async (id) => {
            const tag = await this.repository.findOneBy({ id });
            if (!tag) {
                return null;
            }
            return this.repository.remove(tag);
        };
        this.repository = ormconfig_1.AppDataSource.getRepository(Tag_1.Tag);
    }
}
exports.TagRepository = TagRepository;
//# sourceMappingURL=tagRepository.js.map