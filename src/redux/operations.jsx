import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://644ea8511b4567f4d58d3295.mockapi.io";

// export const fetchContacts = () => async dispatch => {
//     try {
//       dispatch(fetchingInProgress());
//       const response = await axios.get("/contacts");
//       dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//       dispatch(fetchingError(e.message));
//     }
// };

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ id, name, number }, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { id, name, number });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const deleteContact = createAsyncThunk("tasks/deleteContact", async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );