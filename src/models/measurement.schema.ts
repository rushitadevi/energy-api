import { Document, Model, Schema, model } from 'mongoose'
import IMeasurementModel from './IMeasurement'

const itemsSchema = new Schema({
    measurement: { type: String, enum: ['energy', 'power'], default: 'power' },
    tags: {},
    timestamp: { type: Date, default: Date.now, index: true },
    '0100011D00FF': { type: Number },
    '0100021D00FF': { type: Number },
    '0100010800FF': { type: Number },
    '0100020800FF': { type: Number },
    '0100100800FF': { type: Number },
})

const measurementSchema = new Schema(
    {
        data: [itemsSchema],
        status: { type: Number },
    },
    { timestamps: true }
)

const measurementModel: Model<IMeasurementModel> = model<IMeasurementModel>(
    'Measurement',
    measurementSchema
)

export default measurementModel
