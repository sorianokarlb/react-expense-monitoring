import { createSlice } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const initialState = {
    transactionName: '',
    transactionType: '',
    transactionPrice: 0,
    addedBy: 'Karl',
}

const transSlice = createSlice({
    name: 'trans',
    initialState,
    reducers: {
        setTransaction: (state, action) => {
            const transInfo = {
                transactionName: state.transactionName,
                transactionType: state.transactionType,
                transactionPrice: state.transactionPrice,
                addedBy: state.addedBy
            }
            transInfo = action.payload;
        }
    }
})

export const { setTransaction } = transSlice.actions;

export default transSlice.reducer;