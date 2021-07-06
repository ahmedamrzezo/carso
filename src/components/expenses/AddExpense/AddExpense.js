import Button from '../../shared/ui/button/Button';
import './AddExpense.scss';

export const AddExpense = () => {

	const getFormValues = (form, names) => names.map((name) => form[name].value);

	const formSubmitted = (ev) => {
		ev.preventDefault();
		const form = ev.target;

		const values = getFormValues(form.elements, ['title', 'description', 'amount', 'date']);
		const expense = new Expense(...values);

		console.log(expense);

	};


	return (
		<form onSubmit={formSubmitted}>
			<div className="form-group">
				<input className="form-control" type="text" placeholder="Enter title" name="title" />
			</div>
			<div className="form-group">
				<textarea className="form-control" placeholder="Enter description" name="description"></textarea>
			</div>
			<div className="form-group">
				<input className="form-control" type="number" placeholder="Enter expense amount" name="amount" />
			</div>
			<div className="form-group">
				<input className="form-control" type="date" placeholder="Enter date" name="date" />
			</div>

			<Button btnType="primary" type="submit">
				Submit
			</Button>
		</form>
	);
};

class Expense {
	constructor(title, description, amount, date) {
		this.title = title;
		this.description = description;
		this.amount = amount;
		this.date = date;
	}
}