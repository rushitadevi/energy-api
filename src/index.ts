import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import db from './config/db'
import apiRouter from './routes/api'
import measurementRouter from './routes/measurement'

const server = express()

// bodyparser is needed : if you write in req.body and if you dont write bodyparser, it wont parse data
// will give undefined.
// server.use(bodyParser.json());
const corsConfig = {
    origin: true,
    credentials: true,
    exposedHeaders: 'Authorization',
}
server.use(cors(corsConfig)) // Enable CORSes
// server css as static
server.use(express.static(__dirname))
server.use(cookieParser())
// express.json works like body parser
server.use(express.json())

// call routes
server.use('/energy', apiRouter)
server.use('/measurement', measurementRouter)

server.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})

server.get('/', (req, res) => {
    console.log('Welcome to Exnaton-energy!')
    console.log('req', req.cookies)
    res.send('Welcome to Exnaton-energy!')
})

// coonection to db
db.connect()

export { server }
