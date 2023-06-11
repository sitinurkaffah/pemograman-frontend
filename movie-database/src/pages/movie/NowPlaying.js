/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlayingMovie() {
// Membuat state movies
const [movies, setMovies] = useState([]);

// eslint-disable-next-lone-raect-hooks/exhaustive-deps
useEffect( () => {
    getNowPlayingMovie();
}, []);

async function getNowPlayingMovie() {
    // Fetch Data dari Axios
    const response = await axios(ENDPOINTS.NOWPLAYING);

    // Simpan data ke state movie
    setMovies(response.data.results);
}

console.log(movies);

return (
<div>
    <Hero />
    <Movies movies={movies} title="Now Playing Movies" />
</div>
);
}

export default NowPlayingMovie;