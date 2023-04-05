import { Router } from 'express'
import { getMovies, getMoviesById } from '../controllers/movies.controller'

const moviesRouter = Router()

moviesRouter.get('/list', getMovies)
moviesRouter.get('/byid/:id', getMoviesById)

export default moviesRouter
