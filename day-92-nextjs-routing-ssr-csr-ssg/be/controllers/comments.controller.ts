import CommentsModel from '../models/comments.model'
import { Request, Response } from 'express'

export const getComments = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0
  const commentsPerPage: number = Number(req.query.commentsPerPage) || 30
  try {
    const comments = await CommentsModel.find()
      .limit(commentsPerPage)
      .skip(commentsPerPage * page)
    res.status(200).json(comments)
  } catch (error) {
    res.status(404).json({ data: [] })
  }
}

// export const getCommentByMovieId = async (req: Request, res: Response) => {
//   try{
//     const comments = await CommentsModel.find({
//       movie_id: req.params.id
//     })
//     res.status(200).json(comments)
//   } catch(error){
//     res.status(404).json({data: []})
//   }
// }

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
