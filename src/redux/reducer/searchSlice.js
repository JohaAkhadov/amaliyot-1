import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchDis: true,
    filter: ""
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        disableRed: (state, action) => {
            const { payload } = action;
            if (
                payload === "/lateks" ||
                payload === "/folga" ||
                payload === "/celebration" ||
                payload === "/instruments" ||
                payload === "/package"
            ) {
                state.searchDis = false;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
});

export const { disableRed, setFilter } = searchSlice.actions;
export default searchSlice.reducer;