import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
    monuments: [],
    loading: false,
    error: null,
    searchValue:''
}

export const monumentsFetch = createAsyncThunk('fetch/monuments', async () => {
    const res = await fetch('http://localhost:5000/api/monuments')
    const data = await res.json()
    return data
})

export const monumentsSlice = createSlice({
    name: 'monuments',
    initialState,
    reducers:{
        getSearchValue:(state, action) => {
             state.searchValue = action.payload
        }
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(monumentsFetch.pending, (state, action) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(monumentsFetch.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.monuments = action.payload
        })

        builder.addCase(monumentsFetch.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

export const {getSearchValue} = monumentsSlice.actions
export default monumentsSlice.reducer