/* eslint-disable react-hooks/exhaustive-deps */
import StyledHero from "./HeroStyled";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="secondary" size="md">Watch</Button>
        </div>
        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
