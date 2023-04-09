import { Router } from 'express'
import { getMovies, getMoviesById, searchMovies } from '../controllers/movies.controller'

const moviesRouter = Router()

moviesRouter.get('/list', getMovies)
moviesRouter.get('/byid/:id', getMoviesById)
moviesRouter.get("/search", searchMovies)

export default moviesRouter
