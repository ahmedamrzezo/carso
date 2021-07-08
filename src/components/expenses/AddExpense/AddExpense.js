import Button from '../../shared/ui/button/Button';
import ExpenseDate from '../expense-date/ExpenseDate';
import './AddExpense.scss';

export const AddExpense = ({ id, onExpenseAdd }) => {

	const getFormValues = (form, names) => names.map((name) => form[name].value);

	const formSubmitted = (ev) => {
		ev.preventDefault();
		const form = ev.target;

		const values = getFormValues(form.elements, ['title', 'description', 'amount']);
		const expense = new Expense(...values);
		expense.amount = +expense.amount;
		expense.date = new Date();

		return onExpenseAdd(expense, id);
	};


	return (
		<form className="p-6 shadow-xl rounded-xl flex flex-wrap justify-between gap-8 border-2 border-primary_color_50" onSubmit={formSubmitted}>
			<div className="flex-grow">
				<div className="form-group mb-4">
					<input className="form-control" type="text" placeholder="Enter title" name="title" />
				</div>
				<div className="form-group">
					<textarea className="form-control" placeholder="Enter description" name="description"></textarea>
				</div>
			</div>
			<ExpenseDate date={new Date()} />
			<div className="flex-grow w-full text-center flex justify-between">
				<mark className="rounded-xl p-2 bg-primary_color text-primary_light_color ring-4 ring-primary_color_50 inline-block">
					<div className="form-group">
						$ <input className="form-control mx-2 border-primary_light_color text-primary_light_color h-full" type="number" placeholder="Enter amount" name="amount" />
					</div>
				</mark>

				<Button btnType="bordered" type="submit">done</Button>
			</div>

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