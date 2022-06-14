import { createSlice } from "@reduxjs/toolkit";

export const policySlice = createSlice({
    name: "policy",
    initialState: {
        loading: false,
        policyInformation: {}
    },
    reducers: {

    }
})


// Add individual reducers here
// export const {} = policySlice.actions 

export default policySlice.reducer
