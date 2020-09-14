import React from "react";
import PropTypes from "prop-types";
import classes from "../../styles/modal.module.css";

const Modal = ({ handleClose, show }) => {
	const showHideClassName = show ? "modal d-block" : "modal d-none";
	const handleDelete = () => {
		onDelete(id);
	};
	return (
		<div className={showHideClassName}>
			<div className="modal-body">
				<strong> Are you sure </strong>
				<a href="javascript:;" className="modal-close" onClick={handleClose}>
					close
				</a>
			</div>
		</div>
	);
};

Modal.propTypes = {
	onDelete: PropTypes.func,
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export default Modal;
