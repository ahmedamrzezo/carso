import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../shared/ui/button/Button';

const Profile = () => {
	const authCtx = useContext(AuthContext);

	const logout = () => {
		authCtx.logoutHandler();
	};

	return (
		<Button btnType="primary" clickHandler={logout}>
			Logout
		</Button>
	);
};

export default Profile;
