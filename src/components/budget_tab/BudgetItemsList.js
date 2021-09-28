import React, { useState } from 'react';
import { post } from '../../support/genericFetch';
import Dialog from '../../generic_components/Dialog';
import FinTile from '../../generic_components/FinTile';

const BudgetItemsList = ({ budget }) => {
	const [showDialog, setShowDialog] = useState(false);

	const submitNewItem = async () => {
		const body = {
			name: document.getElementById('itemName').value,
			amount: document.getElementById('amount').value,
			isFund: document.getElementById('isFund').checked,
			budget: budget,
		};
		await post('budgetItems', body);
	}

	const dialog = showDialog ? (
		<Dialog title={'Add Budget Category'} closeFunction={() => setShowDialog(false)}>
			<div>
				<div className="center">
					<label htmlFor="itemName">Name</label>
					<input id="itemName" type="text" />
				</div>
				<div className="center">
					<label htmlFor="amount">Amount</label>
					<input id="amount" type="number" />
				</div>
				<div className="center">
					<input id="isFund" type="checkbox" />
					<label htmlFor="isFund">Fund?</label>
				</div>
				<div className="center">
					<button onClick={submitNewItem}>Save New Item</button>
				</div>
			</div>
		</Dialog>
	) : null;

	return (
		<>
			{budget.budgetItems.map(category =>
				<FinTile name={category.name} amount={category.amount} />)}
			<div className="center">
				<button onClick={() => setShowDialog(true)}>New Category</button>
			</div>
			{dialog}
		</>
	);
}

export default BudgetItemsList;