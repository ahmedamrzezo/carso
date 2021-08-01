export const authorize = (options = {}) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = user.token;

	const headers = options.headers ?? {};
	headers.Authorization = `Bearer ${token}`;

	return {
		headers,
		...options
	};
};


export const getOptions = (body) => {
	const ops = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
		}
	};
	if (body) {
		ops.body = JSON.stringify(body);
	}
	return ops;
};