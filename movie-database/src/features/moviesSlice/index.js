import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/data";

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addmovie(state, action) {
            state.movies.push(action.payload)
        },
        deletedMovie() {
        },
        updateMovie(state, action) {
            state.movies = action.payload;
        },
    },
});

//gemerate action dan reducers
const { addmovie, deletedMovie, updateMovie } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addmovie, deletedMovie, updateMovie };
export default moviesReducer;
