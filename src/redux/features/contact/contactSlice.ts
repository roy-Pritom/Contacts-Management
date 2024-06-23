import { TContact } from '@/types/contact';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type TItemState={
    contacts:TContact[] | [];
}
const initialState:TItemState={
    contacts:[]
    
}
export const contactSlice=createSlice({
    name:'addBookmark',
    initialState,
    reducers:{
        selectContact: (state, action: PayloadAction<TContact | TContact[]>) => {
            const values = action.payload;
            if (Array.isArray(values)) {
                state.contacts = [...state.contacts, ...values];
            } else {
                state.contacts.push(values as never);
            }
        },
  
    removeContactFromState:(state,action)=>{
        const idToRemove = action.payload;
        state.contacts=state.contacts.filter(contact=>contact._id!==idToRemove);
    },

    }
})

export const {selectContact,removeContactFromState}=contactSlice.actions;
export default contactSlice.reducer;