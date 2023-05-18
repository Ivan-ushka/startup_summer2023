import {createSlice} from '@reduxjs/toolkit'

export const outSlice = createSlice({
    name: 'output',
    initialState: {
        dataOut: '',
        page: 1,
        total: 0,
    },
    reducers: {
        updateData: (s, a) => {
            s.dataOut = a.payload.objects;
            s.total = a.payload.total
            console.log(s.dataOut)
        },
        setPage: (s,a) => {
            s.page = a.payload
        }
    }
})

export const {updateData, setPage} = outSlice.actions

export const selectOutData = state => state.out.dataOut
export const selectTotal = state => state.out.total
export const selectPage = state => state.out.page
