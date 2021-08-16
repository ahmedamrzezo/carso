import React, { useEffect, useRef, useState } from 'react';

const FormField = ({
	groupClasses = 'form-group',
	fieldType,
	placeholder,
	name,
	autoComplete,
	type,
	required,
	controlClasses = 'form-control',
	fieldChange,
	fieldBlur,
	fieldFocus,
	debounce,
	isValid,
}) => {
	const refs = {
		[name]: useRef(),
	};

	const [value, setValue] = useState(null);

	useEffect(() => {
		if (debounce > 0) {
			const timeRef = setTimeout(() => {
				fieldChange(value);
			}, debounce);
			return () => {
				clearTimeout(timeRef);
			};
		}
	}, [value, debounce, fieldChange]);

	const onChange = () => {
		setValue(refs[name].current.value);
		if (!debounce && fieldChange) return fieldChange(value);
	};

	const onBlur = () => {
		fieldBlur(refs[name].current.value);
	};

	const onFocus = () => {
		if (fieldFocus) fieldFocus(refs[name].current.value);
	};

	const types = {
		input: (
			<input
				className={`${controlClasses} ${
					isValid === undefined
						? ''
						: isValid === false
						? 'border-danger'
						: 'border-success'
				}`}
				placeholder={placeholder}
				name={name}
				autoComplete={autoComplete}
				type={type}
				required={required}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				ref={refs[name]}
			/>
		),
	};

	return (
		<React.Fragment>
			<div className={groupClasses}>{types[fieldType]}</div>
		</React.Fragment>
	);
};

export default FormField;
