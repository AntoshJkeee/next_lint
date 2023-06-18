import { createApi } from '@reduxjs/toolkit/query/react';
import customFetchBase from '../api/customFetchBase';

export const usersApi = createApi({
	reducerPath: 'UsersApi',
	baseQuery: customFetchBase,
	endpoints: (build) => ({
		getUsers: build.query<any, void>({
			query: () => '/users',
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
