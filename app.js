import { config } from 'dotenv';
import express from 'express';
import homeRoute from './src/routes/home';
import userRoute from './src/routes/user';
import './src/database/';
config()
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
  }
}
export default new App().app;
