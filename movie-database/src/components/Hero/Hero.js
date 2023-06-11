/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import StyledHero from "./HeroStyled";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoints";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {getDetailMovie()}, []);

  //Mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL)
    return response.data.results[Math.floor(Math.random() * 20)];
  }

  //Membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    //fetch deatil movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href={trailer} target={"_blank"} variant="secondary" size="md">Watch</Button>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.Title}
          /> 
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
