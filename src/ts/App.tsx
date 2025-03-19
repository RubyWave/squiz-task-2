import { useEffect } from "react";
import Table from "./elements/Table";
import { store } from "./store";
import { setNewBranches } from "./reducers/AppDataSlice";
import getData from "./api/get-data";

function App() {
	useEffect(() => {
		(async () => {
			const newBranches = await getData(6);
			store.dispatch(
				setNewBranches({
					newBranches: newBranches,
				}),
			);
		})();
	}, []);
	return (
		<div className="app">
			<Table />
		</div>
	);
}

export default App;
