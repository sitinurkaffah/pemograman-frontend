/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    //Simpan API_KEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-lone-raect-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch Data dari Axios
        const response = await axios(URL);

        // Simpan data ke state movie
        setMovies(response.data.results);
    }

    console.log(movies);

    return (
    <div>
        <Hero />
        <Movies movies={movies} title="Popular Movies"/>
    </div>
    );
}

export default PopularMovie;