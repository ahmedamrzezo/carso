import './Button.scss';

const Button = ({ className, children, clickHandler }) => {
	const classes = `btn btn-primary ${className}`;

	return (
		<button className={classes} onClick={clickHandler}>
			{children}
		</button>
	);
};

export default Button;