import { AddExpense } from '../AddExpense/AddExpense';
import ExpenseItem from '../expense-item/ExpenseItem';

export const ExpensesList = ({
	expenses,
	onInsertExpense,
	onAddNew,
	cancelNewExpense,
}) => {
	return (
		<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 auto-rows-fr gap-10">
			{expenses.map((expense) => {
				if (expense.editable) {
					return (
						<AddExpense
							key={expense.id}
							onExpenseAdd={onInsertExpense}
							cancelNewExpense={cancelNewExpense}
							id={expense.id}
						/>
					);
				}
				return (
					<ExpenseItem
						expense={expense}
						key={expense.id}
						editable={expense.editable}
					/>
				);
			})}
			<ExpenseItem key="empty" empty={true} onAddNewExpenseComp={onAddNew} />
		</div>
	);
};
