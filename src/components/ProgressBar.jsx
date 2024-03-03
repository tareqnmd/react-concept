import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { MAX, MIN } from '../constants';
const ProgressBar = ({ value, onComplete = () => {} }) => {
	const [percent, setPercent] = useState(value);

	useEffect(() => {
		setPercent(Math.min(Math.max(value, MIN), MAX));

		if (value >= MAX) {
			onComplete();
		}
	}, [onComplete, value]);

	return (
		<div className="progress">
			<span
				style={{
					color: percent > 49 ? 'white' : 'black',
				}}
			>
				{percent.toFixed()}%
			</span>
			<div
				// style={{ width: `${percent}%` }}
				style={{
					transform: `scaleX(${percent / MAX})`,
					transformOrigin: 'left',
				}}
				aria-valuemin={MIN}
				aria-valuemax={MAX}
				aria-valuenow={percent}
				role="progressbar"
			/>
		</div>
	);
};

ProgressBar.propTypes = {
	value: PropTypes.integer,
	onComplete: PropTypes.function,
};

export default ProgressBar;
