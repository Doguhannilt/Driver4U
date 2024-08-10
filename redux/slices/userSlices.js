import { apiSlice } from '../api/apiSlice.js'

import { URL } from '@env'
console.log(URL)


export const userApiSlice = apiSlice.injectEndpoints({
   
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${URL}/auth`,
                method: "POST",
                body: data
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${URL}/logout`,
                method: 'GET'
            })
        }),

        register: builder.mutation({
            query: data => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            })
        }),

        overrideExisting: true

    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,

} = userApiSlice;