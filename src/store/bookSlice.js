import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/booksData";

const bookSlice = createSlice({
    name: "books",
    initialState: books,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
