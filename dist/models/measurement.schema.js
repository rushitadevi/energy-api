"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemsSchema = new mongoose_1.Schema({
    measurement: { type: String, enum: ['energy', 'power'], default: 'power' },
    tags: {},
    timestamp: { type: Date, default: Date.now, index: true },
    '0100011D00FF': { type: Number },
    '0100021D00FF': { type: Number },
    '0100010800FF': { type: Number },
    '0100020800FF': { type: Number },
    '0100100800FF': { type: Number },
});
const measurementSchema = new mongoose_1.Schema({
    data: [itemsSchema],
    status: { type: Number },
}, { timestamps: true });
const measurementModel = (0, mongoose_1.model)('Measurement', measurementSchema);
exports.default = measurementModel;
