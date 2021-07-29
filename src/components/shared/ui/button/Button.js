import './Button.scss';

const Button = ({ className, btnType, children, clickHandler, type }) => {
	const shadow = 'shadow hover:shadow-xl';
	const size = 'w-48 h-20 ';
	const hover = 'transform hover:-translate-y-2 transition-all';

	const types = {
		primary: `rounded-xl bg-primary_color text-white ${shadow} ${size} ${hover} `,
		bordered: `rounded-xl border border-primary_color text-primary_color ${shadow} ${size} ${hover} `,
		text: `p-4 text-primary_color`
	};

	let classes = `font-semibold text-2xl flex items-center justify-center capitalize cursor-pointer m delay-75 ${types[btnType]} ${className}`;

	return (
		<button className={classes} onClick={clickHandler} type={type}>
			{children}
		</button>
	);
};

export default Button;