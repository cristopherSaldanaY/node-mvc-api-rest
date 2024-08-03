import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/ormconfig";
import dotenv from 'dotenv'
import {createApp} from './app'

dotenv.config()
const PORT = process.env.PORT || 3000;


AppDataSource.initialize()
  .then(() => {
    const app = createApp()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
