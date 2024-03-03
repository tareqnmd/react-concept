import { PropTypes } from 'prop-types';
const GridCell = ({ filled, onClick, isDisabled, label }) => {
	return (
		<button
			type="button"
			aria-label={label}
			disabled={isDisabled}
			onClick={onClick}
			className={filled ? 'grid-cell grid-cell-activated' : 'grid-cell'}
		/>
	);
};

GridCell.propTypes = {
	filled: PropTypes.boolean,
	onClick: PropTypes.function,
	isDisabled: PropTypes.boolean,
	label: PropTypes.string,
};

export default GridCell;
