import { environment } from '../../../environment/environment';
import Button from '../../shared/ui/button/Button';
import FormControl from '../../shared/ui/form-control/FormControl';
import { getFormValues } from '../../shared/utils/Form';
import { getOptions } from '../../shared/utils/Http';

const Login = () => {
	const login = async (ev) => {
		ev.preventDefault();
		const values = getFormValues(ev.target.elements, ['email', 'password']);

		const res = await fetch(`${environment.apiUrl}/users/login`, {
			method: 'POST',
			...getOptions(values),
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
					<FormControl
						controlType={'input'}
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
					<FormControl
						controlType={'input'}
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
