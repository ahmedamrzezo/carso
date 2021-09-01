import React from 'react';
import './Button.scss';

const Button = ({
	className,
	btnType,
	children,
	clickHandler,
	type,
	haveHover = true,
	size = 'default'
}) => {
	const shadow = 'shadow hover:shadow-xl';
	const sizes = {
		default: 'w-48 h-20',
		small: 'w-32 h-16',
		dynamic: 'px-8 py-3'
	};
	const hoverClasses = 'transform hover:-translate-y-2 transition-all' + shadow;

	const types = {
		primary: `rounded-xl bg-primary_color text-white ${sizes[size]}`,
		bordered: `rounded-xl border border-primary_color text-primary_color ${sizes[size]} `,
		text: `p-4 text-primary_color`
	};

	let classes = `font-semibold text-2xl flex items-center justify-center capitalize cursor-pointer m delay-75 ${types[btnType]} ${haveHover && hoverClasses} ${className}`;

	return (
		<button className={classes} onClick={clickHandler} type={type}>
			{children}
		</button>
	);
};

export default React.memo(Button);