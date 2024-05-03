import { useState } from 'react';
import Modal from './Modal';

const ModalContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cancelModal = () => {
		setIsOpen(false);
	};
	const okModal = () => {
		setIsOpen(false);
	};
	return (
		<>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal
				title="Test Modal"
				open={isOpen}
				onCancel={cancelModal}
				onOk={okModal}
			>
				<div>
					<strong>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Architecto, reprehenderit.
					</strong>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
						laudantium animi unde natus similique, eaque vel, enim aperiam
						veritatis iusto veniam officia obcaecati, ut deserunt minima rem
						expedita sint ducimus?
					</p>
				</div>
			</Modal>
		</>
	);
};

export default ModalContainer;
