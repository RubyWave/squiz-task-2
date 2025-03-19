import { useEffect } from "react";
import Table from "./elements/Table";
import { store } from "./store";
import { setBranches } from "./reducers/AppDataSlice";
import getData from "./api/get-data";
import Searcher from "./elements/Searcher";

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
			<div className="search-bar">
				<Searcher label="Country" fieldToSearch="country" />
				<Searcher label="Industry" fieldToSearch="industry" />
			</div>
			<Table />
		</div>
	);
}

export default App;
