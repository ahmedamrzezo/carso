import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/shared/ui/button/Button';
import AuthContext from '../../store/auth-context';
import './Header.scss';

function Header() {

	const authCtx = useContext(AuthContext);

	return (
		<header className="bg-primary_light_color primary_color p-4">
			<div className="flex justify-between container mx-auto">
				<div className="text-light">
					CarsCoins
				</div>
				<nav className="nav-links flex-end">
					<NavLink className="nav-links__link-item" to="/dashboard" activeClassName="nav-links__link-item--active">
						Dashboard
					</NavLink>
					<NavLink className="nav-links__link-item" to="/expenses" activeClassName="nav-links__link-item--active">
						My Expenses
					</NavLink>
					{
						authCtx.isLogged &&
						<NavLink className="nav-links__link-item" to="/profile" activeClassName="nav-links__link-item--active">
							Profile
						</NavLink>
					}
					{
						!authCtx.isLogged &&
						<NavLink className="nav-links__link-item" to="/login">
							<Button btnType="primary" size="small" haveHover={false}>Login</Button>
						</NavLink>
					}
				</nav>
			</div>
		</header>
	);
}

export default Header;