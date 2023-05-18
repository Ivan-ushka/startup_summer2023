import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    upper: 0,
    lower: 0,
    catalogues: '',
    listCatalogues: ['']
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCatalogues: (s, a) => {
            s.catalogues = a.payload;
            console.log(s.catalogues)
        },
        reset: s => {
           return s = {
               upper: 0,
               lower: 0,
               catalogues: '',
               listCatalogues: s.listCatalogues
           }
        },
        setLower: (s, a) => {
            if (a.payload <= s.upper){
                s.lower = a.payload
            }
            else{
                s.lower = a.payload
                s.upper =a.payload
            }
            console.log(s.lower)
        },
        setUpper: (s, a) => {
            if (a.payload >= s.lower){
                s.upper = a.payload
            }
            else{
                s.lower = a.payload
                s.upper =a.payload
            }
            console.log(s.upper)
        },
        updateCatalogues: (s, a ) => {
            console.log(s.listCatalogues)
            s.listCatalogues = a.payload.map(e =>{
                return {
                    label: e.title_trimmed,
                    value: e.key,
                }
            })
            console.log(s.listCatalogues)
        },
    }
})

export const { setCatalogues, setUpper, setLower, reset, updateCatalogues } = filtersSlice.actions

export const selectUpper = state => state.filters.upper
export const selectLower = state => state.filters.lower
export const selectCataloguesToSearch = state => state.filters.catalogues
export const selectListCatalogues = state => state.filters.listCatalogues


