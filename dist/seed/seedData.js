"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ormconfig_1 = require("../config/ormconfig");
const User_1 = require("../models/User");
const Project_1 = require("../models/Project");
const Task_1 = require("../models/Task");
const Tag_1 = require("../models/Tag");
const uuid_1 = require("uuid");
const seedData = async () => {
    const userRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
    const projectRepository = ormconfig_1.AppDataSource.getRepository(Project_1.Project);
    const taskRepository = ormconfig_1.AppDataSource.getRepository(Task_1.Task);
    const tagRepository = ormconfig_1.AppDataSource.getRepository(Tag_1.Tag);
    const users = [
        { id: (0, uuid_1.v4)(), name: "Admin User", email: "admin@example.com", isActive: true },
        { id: (0, uuid_1.v4)(), name: "John Doe", email: "john.doe@example.com", isActive: true },
    ];
    await userRepository.save(users);
    const projects = [
        { name: "Project Alpha", description: "First project description" },
        { name: "Project Beta", description: "Second project description" },
    ];
    await projectRepository.save(projects);
    const tags = [{ name: "Urgent" }, { name: "In Progress" }];
    await tagRepository.save(tags);
    const [savedUsers, savedProjects, savedTags] = await Promise.all([
        userRepository.find(),
        projectRepository.find(),
        tagRepository.find(),
    ]);
    const tasks = [
        {
            title: "Task 1",
            description: "Description for task 1",
            dueDate: new Date(),
            status: "Pending",
            project: savedProjects[0],
            user: savedUsers[0],
            tags: [savedTags[0]],
        },
        {
            title: "Task 2",
            description: "Description for task 2",
            dueDate: new Date(),
            status: "In Progress",
            project: savedProjects[1],
            user: savedUsers[1],
            tags: [savedTags[1]],
        },
    ];
    await taskRepository.save(tasks);
    console.log("Seed data inserted successfully");
};
ormconfig_1.AppDataSource.initialize()
    .then(async () => {
    await seedData();
    process.exit(0);
})
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
    process.exit(1);
});
//# sourceMappingURL=seedData.js.map