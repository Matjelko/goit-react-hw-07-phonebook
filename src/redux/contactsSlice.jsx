import { createSlice } from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        status: []
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                return {
                    ...state,
                    status: [...state.status, ...action.payload],
                };
            },
            prepare({ id, name, number }) {
                return {
                    payload: [{
                        id,
                        name,
                        number
                    }]
                }
            }
        },
        deleteContact(state, action) {
            const updatedContacts = state.status.filter(
                contact => contact.id !== action.payload
            );
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return {
                ...state,
                status: updatedContacts,
            };
        },
        loadContacts(state, action) {
            return {
                ...state,
                status: action.payload,
            };
        },
    }
});

export const { addContact, deleteContact, loadContacts } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer