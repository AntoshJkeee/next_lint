export const HTTP_SERVICE_URL = process.env.NEXT_PUBLIC_HTTP_SERVICE_URL;

export const httpService = {
	baseURL: HTTP_SERVICE_URL,
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json',
	},
};
