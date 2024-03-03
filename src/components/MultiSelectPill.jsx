import { PropTypes } from 'prop-types';
const MultiSelectPill = ({ image, text, onClick }) => {
	return (
		<span
			className="user-pill"
			onClick={onClick}
		>
			<img
				src={image}
				alt={text}
			/>
			<span>{text} &times;</span>
		</span>
	);
};

MultiSelectPill.propTypes = {
	image: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.function,
};

export default MultiSelectPill;
