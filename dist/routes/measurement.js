"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const measurement_1 = __importDefault(require("../controllers/measurement"));
const measurementRouter = (0, express_1.Router)();
// carRouter.get("/", controllers.getCars);
measurementRouter.post('/create', measurement_1.default.createMeasurements);
exports.default = measurementRouter;
