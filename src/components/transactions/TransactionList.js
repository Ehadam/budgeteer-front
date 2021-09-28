import React from 'react';
import { useState } from 'react/cjs/react.development';
import { post } from '../../support/genericFetch';
import DateSection from './DateSection';
import Dialog from '../../generic_components/Dialog';
import '../../support/generalStyles.scss';
import './TransactionList.scss';

const TransactionList = ({transactionsMap}) => {
	const [showDialog, setShowDialog] = useState(false);

	const submitNewTransaction = async () => {
		const body = {
			payee: document.getElementById('payee').value,
			date: document.getElementById('date').value,
			amount: document.getElementById('amount').value,
			isExpense: document.getElementById('isExpense').checked,
			account: {id: document.getElementById('account').value},
			budgetItem: {id: document.getElementById('item').value},
		};
		post('/transactions', body);
	}

	const dialog = showDialog ? (
		<Dialog title={'Add Transaction'} closeFunction={() => setShowDialog(false)}>
			<div>
				<div className="center">
					<label htmlFor="payee">Payee</label>
					<input id="payee" type="text" />
				</div>
				<div className="center">
					<label htmlFor="date">Date</label>
					<input id="date" type="date" />
				</div>
				<div className="center">
					<label htmlFor="amount">Amount</label>
					<input id="amount" type="number" />
				</div>
				<div className="center">
					<input id="isExpense" type="checkbox" />
					<label htmlFor="isExpense">Expense?</label>
				</div>
				<div className="center">
					<select id='item'>
						<option value="4028b8817bc297f6017bc29829d60000">Groceries</option>
					</select>
				</div>
				<div className="center">
					<select id='account'>
						<option value="4028b8817c1a9a1a017c1b00a8e40000">Checking</option>
					</select>
				</div>
				<div className="center">
					<button onClick={submitNewTransaction}>Save Transaction</button>
				</div>
			</div>
		</Dialog>
	) : null;

	const sections = [];
	for (const [key, value] of Object.entries(transactionsMap)) {
		sections.push(<DateSection date={key} transactions={value} />);
	}
	return (
		<>
			{sections}
			<span className='addTransaction' onClick={() => setShowDialog(true)}>+</span>
			{dialog}
		</>
	);
}

export default TransactionList;