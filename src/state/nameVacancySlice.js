import {createSlice} from '@reduxjs/toolkit'


export const nameVacancySlice = createSlice({
    name: 'nameVacancy',
    initialState: {
        nameVacancy: '',
    },
    reducers: {
        setNameVacancy: (s,a) => {
            console.log(s.nameVacancy)
            s.nameVacancy = a.payload
            console.log(s.nameVacancy)

        }
    }
})

export const {setNameVacancy} = nameVacancySlice.actions
export const selectNameVacancy = state => state.nameVac.nameVacancy