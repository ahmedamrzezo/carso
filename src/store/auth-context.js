import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = React.createContext({
	isLogged: false,
	loginHandler: () => { },
	logoutHandler: () => { }
});

export const AuthContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user')) || {};
		if (userData.token) {
			loginHandler();
		}
	}, []);

	const navigate = useHistory();

	const loginHandler = (data) => {
		setIsLogged(true);

		localStorage.setItem('user', JSON.stringify(data));

		navigate.push('/expenses');

	};

	const logoutHandler = () => {
		localStorage.removeItem('user');
		setIsLogged(false);

		navigate.push('/login');
	};

	return <AuthContext.Provider value={{ isLogged, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
};

export default AuthContext;