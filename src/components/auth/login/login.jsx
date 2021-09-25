import { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { environment } from '../../../environment/environment';
import AuthContext from '../../../store/auth-context';
import Button from '../../shared/ui/button/Button';
import FormField from '../../shared/ui/form-field/FormField';
import { getFormValues } from '../../shared/utils/Form';
import { getOptions } from '../../shared/utils/Http';

const reducer = (state, action) => {
	switch (action.type) {
		case 'USER_EMAIL':
			return {
				emailVal: action.emailVal,
				passwordVal: state.passwordVal,
			};
		case 'USER_PASSWORD':
			return {
				passwordVal: action.passwordVal,
				emailVal: state.emailVal,
			};
		default:
			console.log('default', action);
			return {
				value: '',
				emailValid: false,
				passwordValid: false,
			};
	}
};

const Login = () => {
	const authCtx = useContext(AuthContext);

	const login = async (ev) => {
		ev.preventDefault();
		const values = getFormValues(ev.target.elements, ['email', 'password']);

		const res = await fetch(`${environment.apiUrl}/users/login`, {
			method: 'POST',
			...getOptions(values),
		});

		const userData = await res.json();
		if (res.ok) authCtx.loginHandler(userData, true);
	};

	const [formState, dispatchEmail] = useReducer(reducer, {
		emailValid: undefined,
		passwordValid: undefined,
	});

	const emailChange = (val) => {
		// console.log(d);
		// dispatchEmail({ type: 'USER_EMAIL', val: val || {} });
	};

	const emailBlur = (val) => {
		dispatchEmail({ type: 'USER_EMAIL', emailVal: val });
	};

	const passwordBlur = (val) => {
		dispatchEmail({ type: 'USER_PASSWORD', passwordVal: val });
	};

	const passwordChange = (val) => {
		console.log(val);
	};

	return (
		<section>
			<h2>Login</h2>

			<form onSubmit={login}>
				{/* email */}

				<FormField
					fieldType={'input'}
					type="email"
					placeholder="Enter your email"
					className="form-control"
					name="email"
					autoComplete="email"
					required
					fieldChange={emailChange}
					fieldBlur={emailBlur}
					debounce={500}
					isValid={
						formState.emailVal === undefined
							? undefined
							: formState.emailVal.length > 5
							? true
							: false
					}
				/>

				{/* password */}

				<FormField
					fieldType={'input'}
					type="password"
					placeholder="Enter your password"
					className="form-control"
					name="password"
					autoComplete="current-password"
					fieldChange={passwordChange}
					fieldBlur={passwordBlur}
					debounce={500}
					required
					isValid={
						formState.passwordVal === undefined
							? undefined
							: formState.passwordVal.length > 4
							? true
							: false
					}
				/>

				<Link className="link" to="/register">
					Or register?
				</Link>

				<Button className="mt-4" btnType="primary" type="submit">
					Let's go
				</Button>
			</form>
		</section>
	);
};

export default Login;
