import {createSlice} from '@reduxjs/toolkit'


export const inpNameJobSlice = createSlice({
    name: 'nameJob',
    initialState: {
        nameJob: '',
    },
    reducers: {
        setNameJob: (s,a) => {
            s.nameJob = a.payload
            console.log(s.nameJob)
        }

    }
})

export const {setNameJob} = inpNameJobSlice.actions
export const selectNameJob = state => state.inpNameJob.nameJob