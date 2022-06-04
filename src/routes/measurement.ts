import { Router } from 'express'
import controllers from '../controllers/measurement'

const measurementRouter = Router()

// carRouter.get("/", controllers.getCars);
measurementRouter.post('/create', controllers.createMeasurements)

export default measurementRouter
