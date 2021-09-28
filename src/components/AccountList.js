import React, { useState, useEffect } from 'react';
import Dialog from '../generic_components/Dialog';
import FinTile from '../generic_components/FinTile';
import { get, post } from '../support/genericFetch';
import './AccountList.scss';

const AccountList = () => {
	const [accounts, setAccounts] = useState([]);
	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {
		get('accounts')
				.then(response => response.text())
				.then(text => {
					const json = text ? JSON.parse(text) : null;
					setAccounts(json);
				});
	}, []);

	const submitNewAccount = async () => {
		const body = {
				name: document.getElementById('accountName').value,
				balance: document.getElementById('balance').value,
		};
		await post('accounts', body);
		setAccounts([...accounts, body]);
	}

	const dialog = showDialog ? (
		<Dialog title={'Add Account'} closeFunction={() => setShowDialog(false)}>
			<div>
				<div className="center">
					<label htmlFor="accountName">Name</label>
					<input id="accountName" type="text" />
				</div>
				<div className="center">
					<label htmlFor="balance">Balance</label>
					<input id="balance" type="number" />
				</div>
				<div className="center">
					<button onClick={submitNewAccount}>Save New Account</button>
				</div>
			</div>
		</Dialog>
	) : null;

	return (
		<>
			{accounts.map(account =>
				<FinTile name={account.name} amount={account.balance} />)}
			<div className="center">
				<button onClick={() => setShowDialog(true)}>New Account</button>
			</div>
			{dialog}
		</>
	);
}

export default AccountList;