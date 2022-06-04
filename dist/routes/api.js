"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = __importDefault(require("../controllers/api"));
const measurementRouter = (0, express_1.Router)();
measurementRouter.post('/', api_1.default.postApiMeasurement);
measurementRouter.get('/:cookie', api_1.default.getApiMeasurement);
exports.default = measurementRouter;
