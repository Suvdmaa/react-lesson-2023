import CommentsModel from '../models/comments.model'
import { Request, Response } from 'express'

export const getComments = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page)
  const commentsPerPage: number = Number(req.query.commentsPerPage)
  try {
    const comments = await CommentsModel.find()
      .limit(commentsPerPage)
      .skip(commentsPerPage * page)
    res.status(200).json(comments)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}

export const getCommentsById = async (req: Request, res: Response) => {
  try {
    const comments = await CommentsModel.find({
      _id: req.params.id,
    })
    res.status(200).json(comments)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}
