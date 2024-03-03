/* eslint-disable react/display-name */
const HigherOrderCom = (Component) => {
	return () => {
		return (
			<>
				<h3>data from higher com</h3>
				<Component />
			</>
		);
	};
};

export default HigherOrderCom;
