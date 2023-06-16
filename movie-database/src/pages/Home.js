import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home({ movies, setMovies }) {
  return (
    <>
      <Hero />
      <Movies 
      title="Latest Movies"
      movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
