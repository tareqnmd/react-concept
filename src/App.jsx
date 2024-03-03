import GridCellArea from './components/GridCellArea';
import HigherOrderTest from './components/HigherOrderTest';
import MultiSelect from './components/MultiSelect';
import ProgressBarArea from './components/ProgressBarArea';
import './index.css';
const App = () => {
	return (
		<>
			<h3>React Concept</h3>
			<HigherOrderTest />
			<br />
			<MultiSelect />
			<br />
			<ProgressBarArea />
			<br />
			<GridCellArea />
		</>
	);
};

export default App;
