import values from 'postcss-modules-values';
import { useContext, useState } from 'react';
import { Link, Prompt } from 'react-router-dom';
import { environment } from '../../../environment/environment';
import AuthContext from '../../../store/auth-context';
import Button from '../../shared/ui/button/Button';
import { getFormValues } from '../../shared/utils/Form';
import { getOptions } from '../../shared/utils/Http';

const Register = () => {
	const authCtx = useContext(AuthContext);

	const [formActive, setFormActive] = useState(false);

	const register = async (ev) => {
		ev.preventDefault();
		const values = getFormValues(ev.target.elements, [
			'fName',
			'lName',
			'email',
			'password',
			'confirmPassword',
		]);

		if (values.password !== values.confirmPassword) return;

		delete values.confirmPassword;

		const res = await fetch(`${environment.apiUrl}/users/register`, {
			method: 'POST',
			...getOptions(values),
		});

		const userData = await res.json();
		if (res.ok) authCtx.loginHandler(userData);
	};

	return (
		<section>
			<h2>Sign Up</h2>

			<Prompt
				when={values && formActive}
				message={(location) => 'Are you sure you want to leave the page?'}
			/>

			<form onFocus={setFormActive.bind(null, true)} onSubmit={register}>
				{/* name */}
				<div className="grid grid-cols-2 gap-4">
					<div className="form-group">
						<input
							type="text"
							placeholder="Enter your first name"
							className="form-control"
							name="fName"
							autoComplete="given-name"
							minLength="3"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="Enter your last name"
							className="form-control"
							name="lName"
							autoComplete="family-name"
							minLength="2"
							required
						/>
					</div>
				</div>
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
				<div className="grid grid-cols-2 gap-4">
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
					<div className="form-group">
						<input
							type="password"
							placeholder="Confirm your password"
							className="form-control"
							name="confirmPassword"
							autoComplete="current-password"
							required
						/>
					</div>
				</div>

				<Link className="link" to="/login">
					Or login?
				</Link>

				<Button className="mt-4" btnType="primary" type="submit">
					Let's do this
				</Button>
			</form>
		</section>
	);
};

export default Register;
