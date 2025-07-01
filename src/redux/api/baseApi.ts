import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: () => ({}),
  tagTypes: ["Posts"],
  // endpoints: (builder) => ({
  //   getPosts: builder.query({
  //     query: () => "/posts",
  //   }),
  // }),
});

// export const { useGetPostsQuery } = baseApi;
