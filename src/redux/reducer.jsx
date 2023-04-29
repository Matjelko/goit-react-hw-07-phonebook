import {
    addContact,
    deleteContact,
    loadContacts,
    setFilter
} from "./actions";

const filterInitialState = {
    status: '',
};

const contactsInitialState = {
    status: [],
  };

export const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
      case setFilter.type:
        return {
          ...state,
          status: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
      case addContact.type:
        return {
          ...state,
          status: [...state.status, ...action.payload],
        };
      case deleteContact.type:
        const updatedContacts = state.status.filter(
          contact => contact.id !== action.payload
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return {
          ...state,
          status: updatedContacts,
        };
      case loadContacts.type:
        return {
          ...state,
          status: action.payload,
        };
  
      default:
        return state;
    }
  };
