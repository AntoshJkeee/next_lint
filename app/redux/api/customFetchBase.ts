import { HTTP_SERVICE_URL } from '../../services/api/http';
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const baseUrl = HTTP_SERVICE_URL;

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers) => {
		headers.set('Accept', 'application/json');
		// if token authorization add needs headers
		// ...
		return headers;
	},
});

const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	return baseQuery(args, api, extraOptions);
};

export default customFetchBase;
