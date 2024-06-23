import { baseApi } from "../baseApi";

export const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // create contact
        createContact: builder.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/create-contact",
                    data
                }
            },
            invalidatesTags: ["contact"]
        }),

        // get all contacts
        getAllContacts: builder.query({
            query: (args) => {
                // console.log(args);
                return {
                    method: "GET",
                    url: "/contacts",
                    params:args
                }
            },
            providesTags: ["contact"]
        }),

        // get contact by id
        getSingleContact: builder.query({
            query: (id: string | undefined) => {
                return {
                    method: "GET",
                    url: `/contacts/${id}`
                }
            },
            providesTags: ["contact"]
        }),

        // update contact 
        updateContact: builder.mutation({
            query: (data) => {
                return {
                    method: "PATCH",
                    url: `/contacts/${data?.id}`,
                    data: data?.payload
                }
            },
            invalidatesTags: ["contact"]
        }),

        // delete contact 
        deleteContact: builder.mutation({
            query: (id: string | undefined) => {
                return {
                    method: "DELETE",
                    url: `/contacts/${id}`
                }
            },
            invalidatesTags: ["contact"]
        }),
    })
})

export const {
    useCreateContactMutation,
    useGetAllContactsQuery,
    useGetSingleContactQuery,
    useUpdateContactMutation,
    useDeleteContactMutation
} = contactApi;