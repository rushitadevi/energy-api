import Measurement from '../models/measurement.schema'
import { Request, Response } from 'express'
import IMeasurementModel from './../models/IMeasurement'
const logger = require('loglevel')

const createMeasurements = async (measurement: IMeasurementModel) => {
    try {
        const newMeasurement = new Measurement(measurement)
        const data = await newMeasurement.save()
        // console.log('measuretn data', data)
        return data
    } catch (error) {
        logger.warn('Error on createMeasurements')
        logger.warn(error)
    }
}

export default { createMeasurements }
