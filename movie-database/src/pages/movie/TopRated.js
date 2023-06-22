/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";

import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function TopRatedMovie() {
    const dispatch = useDispatch();

    // eslint-disable-next-lone-raect-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // Fetch Data dari Axios
        const response = await axios(ENDPOINTS.TOPRATED);
        const movies = response.data.results;
        dispatch(updateMovie(movies));
    }

    return (
    <div>
        <Hero />
        <Movies title="Top Rated Movies"/>
    </div>
    );
}


export default TopRatedMovie;