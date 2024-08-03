import express from "express";
import swaggerUi from 'swagger-ui-express';
import specs from './config/swaggerConfig';
import { userRouter } from "./routes/user";
import { errorHandler } from "./middlewares/errorHandler";
import { projectRouter } from "./routes/project";
import { taskRouter } from "./routes/task";
import { tagRouter } from "./routes/tag";


export const createApp = () => {
  const app = express();

  
  app.use(express.json());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.use("/users", userRouter);
  app.use("/projects", projectRouter);
  app.use("/tasks", taskRouter);
  app.use("/tags", tagRouter);
  app.use(errorHandler);
  return app;
};
