export const getFormValues = (form, fieldNames) => {
	const formValues = {};
	fieldNames.forEach((name) => formValues[name] = form[name].value);
	return formValues;
};