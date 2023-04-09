import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface ITomatoes {
  viewer: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  lastUpdated: Date;
}

interface IMovies {
  plot: string;
  genres: [string];
  runtime: number;
  rated: string;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: Date;
  year: Date;
  imdb: IImdb;
  countries: [string];
  tomatoes: ITomatoes;
}

export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies/list")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  async function sendPage(page: any) {
    const URL = `http://localhost:8080/movies/list?page=${page}`;
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    sendPage(value);
    setPage(value);
  };

  return (
    <div>
      <div className="flex flex-wrap max-w-screen-xl my-10">
        {movies.map((d, index) => (
          <div key={index}>
            <div className="px-4 hover:animate-pulse">
              <img
                src={
                  !d.poster
                    ? "https://as1.ftcdn.net/v2/jpg/05/88/04/58/1000_F_588045865_lChtJrEBQMvL4U1K1AJuklbjzUHwhEYx.jpg"
                    : d.poster
                }
                className="h-96 rounded shadow-2xl w-72"
              />
              <div className=" w-64 p-2 my-3 text-black font-mono">
                <div className="flex">
                  <img
                    src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg"
                    className="w-8 mr-2"
                  />{" "}
                  <a>{d.imdb.rating}</a>
                </div>
                <Link href={{ pathname: "/movies/" + d._id }} passHref>
                  <h3 className="">{d.title}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2} className="flex items-center px-50 my-10">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
