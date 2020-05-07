import React from "react";
import { Modal } from "react-bootstrap";
const modal = ({ modal, onHide, children, className }) => {
	return (
		<Modal show={modal.show} onHide={onHide ? onHide : modal.onHide} className={className}>
			{children}
		</Modal>
	);
};

export default modal;
