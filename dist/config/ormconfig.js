"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
const Project_1 = require("../models/Project");
const Task_1 = require("../models/Task");
const Tag_1 = require("../models/Tag");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3314,
    username: "adminUser",
    password: "root",
    database: "bddnodemvc",
    logging: true,
    entities: [User_1.User, Project_1.Project, Task_1.Task, Tag_1.Tag],
    synchronize: true,
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=ormconfig.js.map