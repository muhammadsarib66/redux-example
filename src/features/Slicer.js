import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value : 1
}


const Slicer = createSlice({
    initialState,
    name: 'show', 
    reducers:{
        inc : (state,action) => {
            console.log(action.payload)
            state.value += action.payload
        },
        dec : (state,action) => {
            state.value -= action.payload
        }
    }
})

export const {inc,dec} = Slicer.actions
export default Slicer.reducer