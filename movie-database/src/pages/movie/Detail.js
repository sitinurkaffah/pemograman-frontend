import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies/Movies";


function Detail() {
    const { id } = useParams()
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecomendationsMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecomendationsMovies() {
        // Fetch Data dari Axparams.idios
        const response = await axios(ENDPOINTS.RECOMENDATION(id));

        // Simpan data ke state movie
        setMovies(response.data.results);
    }

    return (
    <div>
        <DetailMovie />
        <Movies movies={movies} title="Recomendations Movies"/>
    </div>
    );
}

export default Detail;
