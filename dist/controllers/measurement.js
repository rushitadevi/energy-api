"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const measurement_schema_1 = __importDefault(require("../models/measurement.schema"));
const logger = require('loglevel');
const createMeasurements = async (measurement) => {
    try {
        const newMeasurement = new measurement_schema_1.default(measurement);
        const data = await newMeasurement.save();
        console.log('measuretn data', data);
    }
    catch (error) {
        logger.warn('Error on createMeasurements');
        logger.warn(error);
    }
};
exports.default = { createMeasurements };
