import React from 'react';
import ReactDOM from 'react-dom';
import './Dialog.scss';

const Dialog = ({ children, title, closeFunction }) => {
	return ReactDOM.createPortal(
		<div className="curtain">
			<div className="dialog">
				<div className="dialogHeader">
					<h3>{title}</h3>
					<span className="closeButton" onClick={closeFunction}>X</span>
				</div>
				{children}
			</div>
		</div>,
		document.getElementById('dialog-root')
	);
}

export default Dialog;