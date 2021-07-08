import ExpenseDate from '../expense-date/ExpenseDate';
import './ExpenseItem.scss';

export default function ExpenseItem({ expense, empty, onAddNewExpenseComp }) {

	if (empty) {
		return (
			<div className="rounded-xl flex justify-center items-center border-4 border-dashed border-primary_color cursor-pointer" onClick={onAddNewExpenseComp}>
				<span className="text-8xl border-4 border-dashed border-primary_color w-40 h-40 rounded-full flex justify-center items-center text-primary_color">+</span>
			</div>
		);
	}

	return (
		<div className="p-6 shadow-xl rounded-xl flex flex-wrap justify-between gap-8 border-2 border-primary_color_50">
			<div className="max-w-65">
				<h4 className="text-primary_color font-semibold">{expense.title}</h4>
				<p className="text-3xl">{expense.description}</p>
			</div>
			<ExpenseDate date={expense.date} />
			<div className="flex-grow w-full text-center">
				<mark className="rounded-xl p-2 bg-primary_color text-primary_light_color ring-4 ring-primary_color_50 inline-block">${expense.amount}</mark>
			</div>
		</div >
	);
}
