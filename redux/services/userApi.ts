import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const userApi = createApi({
	reducerPath: 'userApi',
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/'
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getUsers: builder.query<any, null>({
			query: () => "users",
		}),
		getUserById: builder.query<any, { id: string }>({
			query: ({ id }) => `users/${id}`,
		}),
	}),
});

export const { useGetUserByIdQuery, useGetUsersQuery } = userApi;
