// Need to use the React-specific entry point to import createApi

import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.BASE_URL}` }),
  endpoints: () => ({}),
  tagTypes:['contact']
})

