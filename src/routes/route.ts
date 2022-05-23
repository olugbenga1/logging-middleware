import express from "express";
import { logger } from "../middleware/logger";

const routes = express.Router();

routes.get("/book", logger, (req, res) => {
  res.send("this is the book route");
});

routes.get("/products", logger, (req, res) => {
  res.send("this is the products route");
});

routes.get("/books", (req, res) => {
  res.send("this is the books route");
});

export default routes;
