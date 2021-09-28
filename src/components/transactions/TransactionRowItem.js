import cn from "classnames";
import React from "react";
import './TransactionRowItem.scss';

const TransactionRowItem = ({ transaction }) => {
	const formattedAmount =
		Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(transaction.amount);
	const signedAmount = transaction.isExpense ? '-' + formattedAmount : formattedAmount;
	return (
		<div class="transactionRowItem">
			<span>{transaction.payee}</span>
			<span class={cn({ expense: transaction.isExpense, income: !transaction.isExpense })}>{signedAmount}</span>
		</div>
	);
}

export default TransactionRowItem;