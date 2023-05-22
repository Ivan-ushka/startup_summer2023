import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filtersSlice} from "./filtersSlice"
import {nameVacancySlice} from "./nameVacancySlice";
import {listVacanciesSlice} from "./listVacanciesSlice";
import thunk from "redux-thunk";

const reducer = combineReducers({
    filters: filtersSlice.reducer,
    nameVac: nameVacancySlice.reducer,
    out: listVacanciesSlice.reducer,
})

export const store = configureStore({reducer: reducer, middleware: [thunk] })
