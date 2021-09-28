import React from 'react';

import './FinTile.scss';

const FinTile = (props) => {
	const formattedAmount = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.amount);
	return (
		<div className="tile">
			<div>{props.name}</div>
			<div>{formattedAmount}</div>
		</div>
	);
}

export default FinTile;