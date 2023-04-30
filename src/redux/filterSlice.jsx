import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        status: ''
    },
    reducers: {
        setFilter(state, action) {
            return {
                ...state,
                status: action.payload,
            }
        }
    }
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer