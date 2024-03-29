import MoviesModel from '../models/movies.model'
import { Request, Response } from 'express'

export const getMoviesById = async (req: Request, res: Response) => {
  try {
    const movies = await MoviesModel.find({
      _id: req.params.id,
    })
    res.status(200).json(movies)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page)
  const moviesPerPage: number = Number(req.query.moviesPerPage)
  try {
    const movies = await MoviesModel.find()
      .limit(moviesPerPage)
      .skip(moviesPerPage * page)
    res.status(200).json(movies)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}
