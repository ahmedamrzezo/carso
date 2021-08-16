import { useContext } from 'react';
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
					<a className="nav-links__link-item" href="/#">
						Dashboard
					</a>
					<a className="nav-links__link-item" href="/#">
						My Expenses
					</a>
					{
						authCtx.isLogged &&
						<a className="nav-links__link-item" href="/#">
							Profile
						</a>
					}
					{
						!authCtx.isLogged &&
						<Button btnType="primary" size="small" haveHover={false}>Login</Button>
					}
				</nav>
			</div>
		</header>
	);
}

export default Header;