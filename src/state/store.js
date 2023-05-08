import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filtersSlice} from "./filtersSlice"
import {inpNameJobSlice} from "./inpNameJobSlice";
import {outSlice} from "./outSlice";
import thunk from "redux-thunk";

const reducer = combineReducers({
    filters: filtersSlice.reducer,
    inpNameJob: inpNameJobSlice.reducer,
    out: outSlice.reducer,
})

export const store = configureStore({reducer: reducer, middleware: [thunk] })
