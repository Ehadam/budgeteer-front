import React from "react";
import { get, post } from "../../support/genericFetch";
import '../../support/generalStyles.scss';

const CreateBudget = ({setCurrentBudget}) => {
	const createBudget = async () => {
		await post('budgets', null, {budgetDate: new Date().toISOString().slice(0, 10)})
		const budget = await get('budgets', {budgetDate: new Date().toISOString().slice(0, 10)})
				.then(response => response.json());
		setCurrentBudget(budget);
	}

	return (
		<>
			<p className='center'>No budget for this month.</p>
			<button onClick={createBudget}>Create Budget</button>
		</>
	);
}

export default CreateBudget;