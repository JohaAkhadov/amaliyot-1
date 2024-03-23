import { combineReducers } from "@reduxjs/toolkit";
import handleCart from "./handleCart";
import searchSlice from "./searchSlice";

const rootReducers = combineReducers({
    handleCart,
    searchSlice,
})

export default rootReducers;