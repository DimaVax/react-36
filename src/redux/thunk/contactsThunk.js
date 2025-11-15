import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://67a762d3203008941f6774aa.mockapi.io/movies/contacts"

export const getContacts = createAsyncThunk('contacts/get', async () => {
    const res = await axios.get(API_URL)
    return res.data
})

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
    const res = await axios.post(API_URL, contact)
    return res.data
})

export const removeContact = createAsyncThunk("contacts/remove", async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    return id
})