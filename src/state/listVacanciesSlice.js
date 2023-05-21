import {createSlice} from '@reduxjs/toolkit'

export const listVacanciesSlice = createSlice({
    name: 'listVacancies',
    initialState: {
        listVacancies: [],
        page: 1,
        total: 0,
        isEmptyList: true,
    },
    reducers: {
        updateListVacancies: (s, a) => {
            s.listVacancies = a.payload.objects;
            s.total = a.payload.total
            !s.listVacancies.length ? s.isEmptyList = false : s.isEmptyList = true;
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
export const selectIsEmpty = state => state.out.isEmptyList
