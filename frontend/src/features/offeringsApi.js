import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const offeringsApi = createApi({
    reducerPath: 'offeringsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/'}),
    endpoints: (builder) => ({
        getAllOfferings: builder.query({
            query: () => 'offerings',
        }),
    }),
});

export const { useGetAllOfferingsQuery } = offeringsApi;