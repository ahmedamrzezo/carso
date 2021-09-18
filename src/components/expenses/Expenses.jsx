import { useCallback, useContext, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import CategoriesContext from '../../store/categories-context';
import { Filter } from '../shared/filter/Filter';
import { ExpensesList } from './expenses-list/ExpensesList';

function Expenses() {
	const [expenses, setExpenses] = useState([]);

	const [expensesLoading, , fetchExpenses] = useHttp();

	const categoriesCtx = useContext(CategoriesContext);

	const getExpenses = useCallback(
		async (params = { category: true }) => {
			const expenses = await fetchExpenses({
				endpoint: '/expenses',
				method: 'GET',
				params,
			});
			setExpenses(expenses ?? []);

			categoriesCtx.getCategories();
		},
		[fetchExpenses]
	);

	useEffect(() => getExpenses(), [getExpenses]);

	const addNewExpense = () => {
		const newExpense = {
			date: new Date().toISOString(),
			amount: '',
			title: '',
			description: '',
			id: new Date().getTime(),
			editable: true,
		};
		setExpenses([...expenses, newExpense]);
	};

	const [, , addExpense] = useHttp();

	const insertExpense = async (expense, id) => {
		const data = await addExpense({
			endpoint: '/expenses',
			method: 'POST',
			payload: expense,
		});
		setExpenses([...expenses.filter((ex) => ex.id !== id), data]);
	};

	const filterExpenses = (year) => {
		const filter = {};
		filter['date'] = {
			$gt: new Date(year).toJSON(),
			$lt: new Date(+year + 1 + '').toJSON(),
		};
		getExpenses({ filter: JSON.stringify(filter) });
	};

	const removeNewExpense = (id) =>
		setExpenses((exps) => exps.filter((exp) => exp.id !== id));

	return (
		<section>
			<h1 className="mb-16">Expenses List</h1>

			<Filter onFilter={filterExpenses} />

			{!expensesLoading && (
				<ExpensesList
					expenses={expenses}
					onInsertExpense={insertExpense}
					cancelNewExpense={removeNewExpense}
					onAddNew={addNewExpense}
				/>
			)}
		</section>
	);
}

export default Expenses;
