/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";


function PopularMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-lone-raect-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch Data dari Axios
        const response = await axios(ENDPOINTS.POPULAR);

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