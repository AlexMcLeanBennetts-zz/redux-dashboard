import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030' }),
    endpoints: builder => ({
        getPolicyData: builder.query({
            query: () => '/dashboard'
        })
    })
})

export const { useGetPolicyDataQuery } = apiSlice