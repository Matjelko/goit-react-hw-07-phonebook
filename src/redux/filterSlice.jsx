import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        items: ''
    },
    reducers: {
        setFilter(state, action) {
            return {
                ...state,
                items: action.payload,
            }
        }
    }
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
