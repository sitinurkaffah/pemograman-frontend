/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function PopularMovie() {
    const dispatch = useDispatch();

    // eslint-disable-next-lone-raect-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch Data dari Axios
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;
        dispatch(updateMovie(movies));
    }

    return (
    <div>
        <Hero />
        <Movies title="Popular Movies"/>
    </div>
    );
}

export default PopularMovie;