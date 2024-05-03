import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import './modal.css';
const Modal = ({ open, title, children, onCancel, onOk }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return mounted && open ? (
		<div className="modal-container">
			<div
				onClick={onCancel}
				className="modal-bg"
			></div>
			<div className="modal-content">
				<div className="modal-header">
					{title} <button onClick={onCancel}>&times;</button>
				</div>
				<div className="modal-body">{children}</div>
				<div className="modal-footer">
					{onOk && <button onClick={onOk}>Ok</button>}
				</div>
			</div>
		</div>
	) : null;
};

Modal.propTypes = {
	open: PropTypes.boolean,
	onCancel: PropTypes.function,
	onOk: PropTypes.function,
	children: PropTypes.children,
	title: PropTypes.string,
};

export default Modal;
