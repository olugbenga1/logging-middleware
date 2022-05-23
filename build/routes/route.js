"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../middleware/logger");
const routes = express_1.default.Router();
routes.get("/book", logger_1.logger, (req, res) => {
    res.send("this is the book route");
});
routes.get("/products", logger_1.logger, (req, res) => {
    res.send("this is the products route");
});
routes.get("/books", (req, res) => {
    res.send("this is the books route");
});
exports.default = routes;
