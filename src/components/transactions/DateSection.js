import React from 'react';
import TransactionRowItem from './TransactionRowItem';
import cn from 'classnames';
import '../../support/generalStyles.scss';
import './DateSection.scss';

const DateSection = ({ date, transactions }) => {
	const formattedDate =
			new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
	return (
		<>
			<div className={cn('center', 'dateSectionHeader')}>{formattedDate}</div>
			{transactions.map(transaction => <TransactionRowItem transaction={transaction} />)}
		</>
	);
}

export default DateSection;