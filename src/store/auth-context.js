import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = React.createContext({
	isLogged: false,
	loginHandler: () => { },
	logoutHandler: () => { }
});

export const AuthContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);

	const navigate = useHistory();

	const loginHandler = useCallback((data, redirect = false) => {
		setIsLogged(true);

		if (data) {
			localStorage.setItem('user', JSON.stringify(data));
		}

		if (redirect)
			navigate.push('/expenses');

	}, [navigate]);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user')) || {};
		if (userData.token) {
			loginHandler();
		}
	}, [loginHandler]);

	const logoutHandler = () => {
		localStorage.removeItem('user');
		setIsLogged(false);

		navigate.push('/login');
	};

	return <AuthContext.Provider value={{ isLogged, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
};

export default AuthContext;