import mongoose, { Date, Schema } from 'mongoose'

interface IAwards {
  wins: number
  nominations: number
  text: string
}

interface IImdb {
  rating: number
  votes: number
  id: number
}

interface ITomatoes {
  viewer: {
    rating: number
    numReviews: number
    meter: number
  }
  lastUpdated: Date
}

interface IMovies {
  plot: string
  genres: [string]
  runtime: number
  rated: string
  cast: [string]
  num_mflix_comments: number
  poster: string
  title: string
  fullplot: string
  languages: [string]
  released: Date
  directors: [string]
  writers: [string]
  awards: IAwards
  lastupdated: Date
  year: Date
  imdb: IImdb
  countries: [string]
  tomatoes: ITomatoes
}

const MoviesSchema: Schema = new Schema({})

const MoviesModel = mongoose.model<IMovies>('Movies', MoviesSchema)

export default MoviesModel
