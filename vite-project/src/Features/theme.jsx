
import { createSlice } from "@reduxjs/toolkit";
import ChangeColor from "../Components/ChangeColor";

const initialStateValue = ""

export const themeSlice = createSlice({
    name :"user",
    initialState : {value : initialStateValue },
    reducers : {
        ChangeColor : (state, action) => {
            state.value = action.payload
        },
        
    },
})
export const {ChangeColor} = themeSlice.actions
export default themeSlice.reducer