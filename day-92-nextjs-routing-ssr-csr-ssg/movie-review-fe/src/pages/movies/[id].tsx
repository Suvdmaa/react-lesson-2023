import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

export default function Movies({ data }: { data: any }): JSX.Element {
  console.log(data[0].title)
  //   const [movies, setMovies] = useState<IMovies[]>([])

  //   useEffect(() => {
  //     fetch('http://localhost:8080/movies/byid/')
  //       .then((res) => res.json())
  //       .then((data) => setMovies(data))
  //   }, [movies])

  return <div>{data[0].title}</div>
}

export async function getStaticProps(context: any) {
  const { id } = context.params
  const res = await axios(`http://localhost:8080/movies/byid/${id}`)
  const data = await res.data
  console.log('id:', id)
  console.log('data:', data)

  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const res = await axios(`http://localhost:8080/movies/list`)
  const movies = await res.data

  const ids = movies.map((movie: any) => movie._id)
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
