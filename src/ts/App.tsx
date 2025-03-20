import { useEffect } from "react";
import Table from "./elements/Table";
import { store } from "./store";
import { setBranches } from "./reducers/AppDataSlice";
import getData from "./api/get-data";
import Filter from "./elements/Filter";
import Searcher from "./elements/Searcher";
import Chart from "./elements/Chart";

function App() {
	useEffect(() => {
		(async () => {
			const newBranches = await getData(25);
			store.dispatch(
				setBranches({
					newBranches: newBranches,
				}),
			);
		})();
	}, []);
	return (
		<div className="app">
			<div className="app__data-side">
				<div className="search-bar">
					<div className="search-bar__filters">
						<Filter label="Country" fieldToSearch="country" />
						<Filter label="Industry" fieldToSearch="industry" />
					</div>
					<Searcher />
				</div>
				<Table />
			</div>
			<div className="app__graph-side">
				<Chart />
			</div>
		</div>
	);
}

export default App;
