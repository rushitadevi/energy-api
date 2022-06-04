import { Router } from 'express'
import controllers from '../controllers/api'

const measurementRouter = Router()

measurementRouter.post('/', controllers.postApiMeasurement)
measurementRouter.get('/:cookie', controllers.getApiMeasurement)

export default measurementRouter
