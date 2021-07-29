export const includeAuth = (options = {}) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = user.token;

	const headers = options.headers ?? {};
	headers.Authorization = `Bearer ${token}`;

	return {
		headers,
		...options
	};
};
