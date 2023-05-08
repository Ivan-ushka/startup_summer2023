import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    upper: 0,
    lower: 0,
    sector: [],
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setSector: (s, a) => {
            console.log(s.sector)
            s.sector.push(a.payload)
            console.log(s.sector)
        },
        reset: s => {
           return s = initialState
        },
        setLower: (s, a) => {
            console.log(s.lower)
            if (a.payload <= s.upper){
                s.lower = a.payload
            }else {
                s.lower = s.upper
                s.upper = a.payload
            }
        },
        setUpper: (s, a) => {
            if (a.payload >= s.lower){
                s.upper = a.payload
            } else {
                s.upper = s.lower
                s.lower = a.payload
            }
        },
    }
})

export const { setSector, setUpper, setLower, reset } = filtersSlice.actions

export const selectUpper = state => state.filters.upper
export const selectLower = state => state.filters.lower
export const selectSector = state => state.filters.sector


