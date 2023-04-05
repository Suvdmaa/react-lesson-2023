import { useEffect, useState } from 'react'
import React from "react";
import styles from '@/styles/Home.module.css'

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


export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/movies/list")
    .then((res) => res.json())
    .then((data) => setMovies(data))
  }, [movies])
 
  return (
    <div>
      <h1>Movies</h1>
      <div className={styles.movies}> 
        
      {movies.map((d, index) => (
        <div key={index}>
          <img src={d.poster} className={styles.poster}/>
          <h4 className={styles.rating}>{d.imdb.rating}</h4>
          <h3 className={styles.title}>{d.title}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}
