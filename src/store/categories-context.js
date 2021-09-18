import React, { useCallback, useState } from 'react';
import useHttp from '../hooks/use-http';

const CategoriesContext = React.createContext({
	categories: [],
	getCategories: () => { }
});

export const CategoriesContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	const [, , fetchCategories] = useHttp();

	const getCategories = useCallback(async () => {
		const categories = await fetchCategories({
			endpoint: '/categories',
			method: 'GET',
		});
		setCategories(categories);
	}, [fetchCategories]);

	return <CategoriesContext.Provider value={{ categories, getCategories }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContext;