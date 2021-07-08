import ExpenseItem from "./expense-item/ExpenseItem";
import { useEffect, useState } from 'react';
import { AddExpense } from "./AddExpense/AddExpense";
import { environment } from "../../environment/environment";
import { Filter } from "../shared/filter/Filter";

function Expenses() {

	const [expenses, setExpenses] = useState([]);

	useEffect(() => getExpenses(), []);

	const getExpenses = async () => {
		try {
			const res = await fetch(`${environment.apiUrl}/expenses`);
			setExpenses(await res.json());
		} catch (error) {
			console.error(error);
		}
	};

	const addNewExpense = () => {
		const newExpense = {
			date: new Date().toISOString(),
			amount: '',
			title: '',
			description: '',
			id: new Date().getTime(),
			editable: true
		};
		setExpenses([...expenses, newExpense]);
	};

	const insertExpense = async (expense, id) => {
		try {
			const res = await fetch(`${environment.apiUrl}/expenses`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(expense)
			});
			const data = await res.json();
			if (!data.errors) {
				console.log(id);
				return setExpenses([...expenses.filter((ex) => ex.id !== id), data]);
			}
			throw new Error(data.message);
		} catch (error) {
			console.error(error);
		}
	};

	const filterExpenses = (year) => {
		console.log(year);
	};

	return (
		<section>
			<h1 className="mb-16">Expenses List</h1>

			<Filter onFilter={filterExpenses} />

			<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 auto-rows-fr gap-10">
				{expenses.map((expense) => {
					if (expense.editable) {
						return <AddExpense key={expense.id} onExpenseAdd={insertExpense} id={expense.id} />;
					}
					return <ExpenseItem expense={expense} key={expense.id} editable={expense.editable} />;
				})}
				<ExpenseItem key="empty" empty={true} onAddNewExpenseComp={addNewExpense} />
			</div>
		</section>
	);
}

export default Expenses;