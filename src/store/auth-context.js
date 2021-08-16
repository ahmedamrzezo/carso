import React, { useEffect, useState } from 'react';

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

	const loginHandler = () => {
		setIsLogged(true);

	};

	const logoutHandler = () => {
		localStorage.removeItem('user');
		setIsLogged(false);
	};

	return <AuthContext.Provider value={{ isLogged, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
};

export default AuthContext;