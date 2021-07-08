import { AdjustmentsIcon } from '@heroicons/react/outline';
import Button from '../ui/button/Button';

export const Filter = ({ onFilter }) => {
	const handleFilter = (ev) => {
		const filterBy = {
			byYear: filterByYear,
		};
		try {
			return onFilter(filterBy[ev.target.name](ev.target.value));
		} catch (error) {
			console.error(error);
		}
	};

	const filterByYear = (value) => value;

	return (
		<div className="mb-8">
			<Button btnType="text">
				<AdjustmentsIcon className="w-8"></AdjustmentsIcon>
				<h3>Filter</h3>
			</Button>

			<select className="form-control" name="byYear" onChange={handleFilter}>
				<option value="" defaultValue>
					select year
				</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option>
			</select>
		</div>
	);
};
