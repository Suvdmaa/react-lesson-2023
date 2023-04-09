import { Router } from 'express'
import {
  // getCommentByMovieId,
  getComments,
  getCommentsById,
} from '../controllers/comments.controller'

const commentsRouter = Router()

commentsRouter.get('/list', getComments)
commentsRouter.get('/byId/:id', getCommentsById)


export default commentsRouter
