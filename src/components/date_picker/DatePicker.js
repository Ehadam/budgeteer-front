import React from "react";
import cn from 'classnames';
import './DatePicker.scss';
import '../../support/generalStyles.scss';

const DatePicker = () => {
	return (
		<div className={cn('center', 'datePicker')}>
			<span className='leftArrow'>&lt;</span>
			<span>September 2021</span>
			<span className='rightArrow'>&gt;</span>
		</div>
	);
}

export default DatePicker;