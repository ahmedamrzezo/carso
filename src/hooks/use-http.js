import { useCallback, useState } from "react";
import { authorize, getOptions } from "../components/shared/utils/Http";
import { environment } from "../environment/environment";


const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async ({ endpoint, method, payload = null, params }) => {

		setLoading(true);
		setError(null);

		const url = new URL(`${environment.apiUrl}${endpoint}`);

		const headers = { method, ...authorize(getOptions()) };

		if (params)
			url.searchParams.append('filter', JSON.stringify(params));

		if (payload)
			headers.body = JSON.stringify(payload);

		try {
			const res = await fetch(
				url,
				headers
			);

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error.message);
			}

			setLoading(false);

			return data;

		} catch (error) {
			console.error(error);
			setError(error ?? 'Something went bad!');

			setLoading(false);
		}
	}, []);

	return [loading, error, sendRequest];
};

export default useHttp;