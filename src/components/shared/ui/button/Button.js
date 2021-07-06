import './Button.scss';

const Button = ({ btnType, children, clickHandler, type }) => {
	const types = {
		primary: 'bg-primary_color text-white',
		bordered: 'border border-primary_color text-primary_color'
	};

	let classes = `rounded-xl font-semibold text-2xl w-48 h-20 flex items-center justify-center capitalize cursor-pointer shadow hover:shadow-xl transform hover:-translate-y-2 transition-shadow transition-transform delay-75 ${types[btnType]}`;

	return (
		<button className={classes} onClick={clickHandler} type={type}>
			{children}
		</button>
	);
};

export default Button;