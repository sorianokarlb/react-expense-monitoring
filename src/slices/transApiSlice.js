import { apiTransSlice } from "./apiSlice";
const TRANS_URL = 'api/trans';

export const transApiSlice = apiTransSlice.injectEndpoints({
    endpoints: (builder) => ({
        addTrans: builder.mutation({
            query: (data) => ({
                url: `${TRANS_URL}/addTransaction`,
                method: 'POST',
                body: data
            })
        })
    }),
});

export const { useAddTrans } = transApiSlice;