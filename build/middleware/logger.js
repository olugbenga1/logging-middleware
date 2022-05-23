"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const logger = (req, res, next) => {
    console.log(`This URL is localhost:3000${req.url}`);
    next();
};
exports.logger = logger;
