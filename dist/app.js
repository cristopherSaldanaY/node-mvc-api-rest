"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./config/swaggerConfig"));
const user_1 = require("./routes/user");
const errorHandler_1 = require("./middlewares/errorHandler");
const project_1 = require("./routes/project");
const task_1 = require("./routes/task");
const tag_1 = require("./routes/tag");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
    app.use("/users", user_1.userRouter);
    app.use("/projects", project_1.projectRouter);
    app.use("/tasks", task_1.taskRouter);
    app.use("/tags", tag_1.tagRouter);
    app.use(errorHandler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map