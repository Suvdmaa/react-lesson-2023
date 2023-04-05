import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import theaterRouter from './routes/theaters.api'
import moviesRouter from './routes/movies.api'
import commentsRouter from './routes/comment.api'

const app: Express = express()
const PORT = process.env.PORT || 8080
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test'

let name: string = '<h1>Day 90 Express Typescript</h1>'
let phonenumber: number = 99119911
let isMarried: boolean = false
let sheeps: Array<string> = ['sheep1', 'sheep2', 'sheep3']
let sheep: string[] = ['sheep1', 'sheep2', 'sheep3']

let sheepObject: { name: string; age: number } = {
  name: 'sheep1',
  age: 1,
}

sheepObject.age = 3

interface Student {
  name: string
  age: number
  isVerified: boolean
}

app.use(express.json())
app.use(cors())
app.use('/theaters', theaterRouter)
app.use('/movies', moviesRouter)
app.use('/comments', commentsRouter)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(name)
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error(error))
  console.log(`Appilication is running on http://localhost:${PORT}`)
})
