import React, { useState, useEffect } from 'react';
import { get } from '../../support/genericFetch';
import BudgetItemsList from './BudgetItemsList';
import CreateBudget from './CreateBudget';
import Spinner from '../../generic_components/Spinner';
import '../../support/generalStyles.scss';

const BudgetTab = () => {
	const [currentBudget, setCurrentBudget] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const currentDate = new Date().toISOString().slice(0, 10);
		get('budgets', {budgetDate: currentDate})
				.then(response => response.text())
				.then(text => {
					const json = text ? JSON.parse(text) : null;
					setCurrentBudget(json);
					setIsLoading(false);
				});
	}, []);

	let body;

	if (isLoading) {
		body = <Spinner />;
	} else if (currentBudget?.budgetItems) {
		body = <BudgetItemsList budget={currentBudget} />;
	} else {
		body = <CreateBudget setCurrentBudget={setCurrentBudget} />;
	}

	return (
		body
	);
}

export default BudgetTab;