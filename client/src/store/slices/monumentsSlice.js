import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
    monuments: [],
    loading: false,
    error: null,
    deleteLoadingId: false,
    deleteErrorId: null,
    addLoading: false,
    addError: null,
    searchValue: '',
    selectedId: null
}

export const monumentsFetch = createAsyncThunk('fetch/monuments', async () => {
    const res = await fetch('http://localhost:5000/api/monuments')
    const data = await res.json()
    return data
})

export const deleteMonumentFetch = createAsyncThunk('fetch/monumentsDelete', async (id) => {
    const res = await fetch("http://localhost:5000/api/monuments/" + id, { method: "DELETE" })
    const data = await res.json()
    return { data, id }
})

export const addMonumentFetch = createAsyncThunk('fetch/monumentsAdd', async (monument) => {
    const res = await fetch("http://localhost:5000/api/monuments", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(monument)
    })
    const data = await res.json()
    return data
})

export const monumentsSlice = createSlice({
    name: 'monuments',
    initialState,
    reducers: {
        getSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        getId: (state, action) => {
            console.log(action.payload)
            state.selectedId = action.payload
            console.log(state.selectedId)
        },
    }
    ,
    extraReducers: (builder) => {
        // GET ALL ELEMENTS

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

        // DELETING

        builder.addCase(deleteMonumentFetch.pending, (state, action) => {
            console.log(action.payload)
            state.deleteLoadingId = true
            state.deleteErrorId = null
        })

        builder.addCase(deleteMonumentFetch.fulfilled, (state, action) => {
            state.deleteLoadingId = false
            state.deleteErrorId = null
            console.log(action.payload)
            const monumentIndex = state.monuments.findIndex((item) => item.id === action.payload.id)
            state.monuments.splice(monumentIndex, 1)
        })

        builder.addCase(deleteMonumentFetch.rejected, (state, action) => {
            state.deleteLoadingId = false
            state.deleteErrorId = true
        })

        // ADDING

        builder.addCase(addMonumentFetch.pending, (state, action) => {
            state.addLoading = true
            state.addError = null
        })

        builder.addCase(addMonumentFetch.fulfilled, (state, action) => {
            state.addLoading = false
            state.addError = null
            console.log(action.payload)
            state.monuments.push(action.payload)
        })

        builder.addCase(addMonumentFetch.rejected, (state, action) => {
            state.addLoading = false
            state.addError = true
        })
    }
})

export const { getSearchValue, deleteMonument, getId } = monumentsSlice.actions
export default monumentsSlice.reducer