import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // fetchingInProgress(state) {
        //     state.isLoading = true;
        // },
        // fetchingSuccess(state, action) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items = action.payload;
        // },
        // fetchingError(state, action) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },

        // addContact: {
        //     reducer(state, action) {
        //         return {
        //             ...state,
        //             items: [...state.items, ...action.payload],
        //         };
        //     },
        //     prepare({ id, name, number }) {
        //         return {
        //             payload: [{
        //                 id,
        //                 name,
        //                 number
        //             }]
        //         }
        //     }
        // },
        // deleteContact(state, action) {
        //     const updatedContacts = state.items.filter(
        //         contact => contact.id !== action.payload
        //     );
        //     localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        //     return {
        //         ...state,
        //         items: updatedContacts,
        //     };
        // },
        // loadContacts(state, action) {
        //     return {
        //         ...state,
        //         items: action.payload,
        //     };
        // },
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

// export const { addContact, deleteContact, loadContacts } = contactsSlice.actions
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer
