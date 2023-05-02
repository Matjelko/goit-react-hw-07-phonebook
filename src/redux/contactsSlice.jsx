import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending](state, action) {
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

        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             return {
    //                 ...state,
    //                 items: [...state.items, ...action.payload],
    //             };
    //         },
    //         prepare({ id, name, number }) {
    //             return {
    //                 payload: [{
    //                     id,
    //                     name,
    //                     number
    //                 }]
    //             }
    //         }
    //     },
    //     deleteContact(state, action) {
    //         const updatedContacts = state.items.filter(
    //             contact => contact.id !== action.payload
    //         );
    //         localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    //         return {
    //             ...state,
    //             items: updatedContacts,
    //         };
    //     },
    //     loadContacts(state, action) {
    //         return {
    //             ...state,
    //             items: action.payload,
    //         };
    //     },
    // }
});

// export const { addContact, deleteContact, loadContacts } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer