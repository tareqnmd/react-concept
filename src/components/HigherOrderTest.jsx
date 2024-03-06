/* eslint-disable react-refresh/only-export-components */
import HigherOrderCom from './HigherOrderCom';

const HigherOrderTest = () => {
	return <h4>Low Component</h4>;
};

export default HigherOrderCom(HigherOrderTest);
