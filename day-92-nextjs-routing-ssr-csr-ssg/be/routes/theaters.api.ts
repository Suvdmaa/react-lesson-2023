import { Router } from 'express'
import { getTheaters } from '../controllers/theater.controller'
import { getTheaterById } from '../controllers/theater.controller'
import { searchTheaters } from '../controllers/theater.controller'

const theaterRouter = Router()

theaterRouter.get('/list', getTheaters)
theaterRouter.get('/byid/:id', getTheaterById)
theaterRouter.get('/search', searchTheaters)

export default theaterRouter
