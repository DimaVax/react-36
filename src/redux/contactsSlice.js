import { createSlice } from "@reduxjs/toolkit";
import { getContacts, removeContact, addContact } from "./thunk/contactsThunk";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false
    } ,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getContacts.pending, (state) => {state.loading = true})
        .addCase(getContacts.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
        })
        .addCase(removeContact.fulfilled, (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        })
    }
    // reducers: {
    //     addContact(state, action){
    //         state.push(action.payload)
    //     },
    //     removeContact(state, action){
    //         return state.filter(contact => contact.id !== action.payload);
    //     }
    // }
})

// export const {addContact, removeContact} = contactsSlice.actions
export default contactsSlice.reducer
// [{name: 'dima', id: 67, phone: '+67 1488 5242'}]