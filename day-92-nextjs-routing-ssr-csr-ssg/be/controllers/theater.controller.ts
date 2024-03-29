import TheaterModel from '../models/theaters.model'
import { Request, Response } from 'express'

export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 30
  try {
    const theaters = await TheaterModel.find()
      .limit(moviesPerPage)
      .skip(moviesPerPage * page)
    res.status(200).json(theaters)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    // console.log(req.params.id)
    const theater = await TheaterModel.find({
      theaterId: Number(req.params.id),
    })
    res.status(200).json(theater)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}

export const searchTheaters = async (req: Request, res: Response) => {
  const fields = ['state', 'street1', 'city', 'zipcode']
  const keyword: string = String(req.query.keyword)
  try {
    // const theaters = await TheaterModel.find({
    //   $or: [
    //     { 'location.address.street1': { $regex: new ReqExp(keyword, 'i') } },
    //     { 'location.address.city': { $regex: keyword } },
    //     { 'location.address.zipcode': { $regex: keyword } },
    //     { 'location.address.state': { $regex: keyword } },
    //   ],
    // })
    const theaters = await TheaterModel.find({
      $or: fields.map((field) => ({
        [`location.address.${field}`]: { $regex: new RegExp(keyword, 'i') },
      })),
    })
    res.status(200).json(theaters)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}
