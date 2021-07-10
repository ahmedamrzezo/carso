import ExpenseItem from "./expense-item/ExpenseItem";
import { useEffect, useState } from 'react';
import { AddExpense } from "./AddExpense/AddExpense";
import { environment } from "../../environment/environment";
import { Filter } from "../shared/filter/Filter";
import { ExpensesList } from "./expenses-list/ExpensesList";

function Expenses() {

	const [expenses, setExpenses] = useState([]);

	useEffect(() => getExpenses(), []);

	const getExpenses = async (filter = {}) => {
		const url = new URL(`${environment.apiUrl}/expenses`);
		const filterKeys = Object.keys(filter);

		if (filterKeys.length) {
			filterKeys.forEach(key => url.searchParams.append(key, filter[key]));
		}

		try {
			const res = await fetch(url);
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
		const filter = {};
		filter['date'] = {
			$gt: new Date(year).toJSON(),
			$lt: new Date((+year + 1) + '').toJSON()
		};
		getExpenses({ filter: JSON.stringify(filter) });
	};

	return (
		<section>
			<h1 className="mb-16">Expenses List</h1>

			<Filter onFilter={filterExpenses} />

			<ExpensesList expenses={expenses} onInsertExpense={insertExpense} onAddNew={addNewExpense} />
		</section>
	);
}

export default Expenses;