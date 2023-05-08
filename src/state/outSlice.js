import {createSlice} from '@reduxjs/toolkit'

export const outSlice = createSlice({
    name: 'output',
    initialState: {
        dataOut: '',
        listCatalogues: ['g'],
    },
    reducers: {
        updateData: (s, a) => {
            s.dataOut = a.payload.objects;
            console.log(s.dataOut)

        },
        updateCatalogues: (s, a )=>{
            s.listCatalogues = a.payload.title;
            console.log(s.listCatalogues)
        }
    }
})

export const {updateData, updateCatalogues} = outSlice.actions

export const selectOutData = state => state.out.dataOut
export const selectListCatalogues = state => state.out.listCatalogues