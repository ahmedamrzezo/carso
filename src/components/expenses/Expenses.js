import ExpenseItem from "./expense-item/ExpenseItem";
import { useEffect, useState } from 'react';

function Expenses() {

	const [expenses, setExpenses] = useState([]);

	useEffect(() => getExpenses(), []);

	const getExpenses = async () => {
		try {
			const res = await fetch('https://expensat-api.herokuapp.com/expenses');
			setExpenses(await res.json());
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
			{expenses.map((expense, id) => <ExpenseItem expense={expense} key={id} />)}
			<ExpenseItem key="new" empty={true} />
		</div>);
}

export default Expenses;