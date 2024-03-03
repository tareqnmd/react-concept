import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const ProgressBarArea = () => {
	const [value, setValue] = useState(0);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const loadingInterval = setInterval(() => {
			setValue((val) => val + 0.1);
		}, 20);
		return () => {
			clearInterval(loadingInterval);
		};
	}, []);

	return (
		<div className="progress-area">
			<span>Progress Bar</span>
			<ProgressBar
				value={value}
				onComplete={() => setSuccess(true)}
			/>
			<span>{success ? 'Complete!' : 'Loading...'}</span>
		</div>
	);
};

export default ProgressBarArea;
