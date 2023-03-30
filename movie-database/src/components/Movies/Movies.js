import { useState } from "react";
import { nanoid } from "nanoid";

import data from "../../utils/constant/data";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {
    // Membuat state movies
  const [movies, setMovies] = useState (data);

  function handleClick() {
    const newFilm = {
    id: nanoid(),
    title:"Jigsaw",
    year: "2022",
    type:"movie",
    poster:"https://picsum.photos/300/400",
    };

  // Update state movies
  setMovies([...movies, newFilm]);
}

  return (
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {movies.map(function (movie) {
              return <Movie key={movie.id} movie={movie} />;
            })}
            <button onClick={handleClick}>Tambah File</button>
          </div>
        </section>
      </div>
  );
}

export default Movies;