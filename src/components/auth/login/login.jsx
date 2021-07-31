import { environment } from '../../../environment/environment';
import Button from '../../shared/ui/button/Button';
import { getFormValues } from '../../shared/utils/Form';

const Login = () => {
	const login = async (ev) => {
		ev.preventDefault();
		const values = getFormValues(ev.target.elements, ['email', 'password']);

		const res = await fetch(`${environment.apiUrl}/users/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(values),
		});

		const userData = await res.json();

		localStorage.setItem('user', JSON.stringify(userData));
	};

	return (
		<section>
			<h2>Login</h2>

			<form onSubmit={login}>
				{/* email */}

				<div className="form-group w-100 my-4">
					<input
						type="email"
						placeholder="Enter your email"
						className="form-control"
						name="email"
						autoComplete="email"
						required
					/>
				</div>

				{/* password */}

				<div className="form-group">
					<input
						type="password"
						placeholder="Enter your password"
						className="form-control"
						name="password"
						autoComplete="current-password"
						required
					/>
				</div>

				<Button className="mt-4" btnType="primary" type="submit">
					Let's go
				</Button>
			</form>
		</section>
	);
};

export default Login;
