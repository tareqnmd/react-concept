/* eslint-disable react/display-name */
const HigherOrderCom = (Component) => {
	return function (props) {
		return (
			<>
				<h4>High Component</h4>
				<Component {...props} />
			</>
		);
	};
};

export default HigherOrderCom;
