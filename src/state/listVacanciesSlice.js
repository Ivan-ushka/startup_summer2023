import {createSlice} from '@reduxjs/toolkit'

export const listVacanciesSlice = createSlice({
    name: 'listVacancies',
    initialState: {
        listVacancies: [],
        page: 1,
        total: 0,
    },
    reducers: {
        updateListVacancies: (s, a) => {
            s.listVacancies = a.payload.objects;
            s.total = a.payload.total
            console.log(s.listVacancies)
        },
        setPage: (s,a) => {
            s.page = a.payload
        }
    }
})

export const {updateListVacancies, setPage} = listVacanciesSlice.actions

export const selectListVacancies = state => state.out.listVacancies
export const selectTotal = state => state.out.total
export const selectPage = state => state.out.page
