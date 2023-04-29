import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", ({ id, name, number }) => {
    return {
        payload: [{
            id,
            name,
            number
        }]
    }
})

export const deleteContact = createAction("contacts/deleteContact")

export const loadContacts = createAction("contacts/loadContacts");

export const setFilter = createAction("filter/setFilter")