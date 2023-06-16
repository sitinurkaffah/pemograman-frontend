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
    },
});

//gemerate action dan reducers
const { addmovie } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addmovie };
export default moviesReducer;
