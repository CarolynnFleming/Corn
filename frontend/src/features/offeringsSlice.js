import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    items: [],
    status: null,
};

export const offeringsFetch = createAsyncThunk(
    'offerings/offeringsFetch',
    async() => {
        try{
     const response = await axios.get('http://localhost:5500/offerings')
     console.log(response.data, 'witch');
     return response.data
        } catch (error) {
           return error.message 
        }
    }
)
const offeringsSlice = createSlice({
    name: 'offerings',
    initialState,
    reducers: {},
    extraReducers: {
        [offeringsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [offeringsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.offerings = action.payload
        },
        [offeringsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})

export default offeringsSlice.reducer;