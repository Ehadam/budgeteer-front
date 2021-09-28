import React, { useState } from 'react';
import AccountList from '../components/AccountList';
import BudgetTab from '../components/budget_tab/BudgetTab';
import cn from 'classnames';

import './Card.scss';

const Card = () => {
	const [currentTab, setCurrentTab] = useState('accounts');
	return (
		<div className="card">
			<div className="tabBar">
				<div onClick={() => setCurrentTab('accounts')} className={cn({ active: currentTab === 'accounts' })}>
					Accounts
				</div>
				<div onClick={() => setCurrentTab('budget')} className={cn({ active: currentTab === 'budget' })}>
					Budget
				</div>
			</div>
			{currentTab === 'accounts'
				? <AccountList />
				: <BudgetTab />}
		</div>
	);
}

export default Card;