import { useEffect, useRef } from "react";
import Table from "./elements/Table";
import { store } from "./store";
import { setBranches, setLoadedData } from "./reducers/AppDataSlice";
import getData from "./api/get-data";
import Filter from "./elements/Filter";
import Searcher from "./elements/Searcher";
import Chart from "./elements/Chart";
import { useAppSelector } from "./hooks";

function App() {
	const appData = useAppSelector((state) => state.appData);
	const appWrapperElement = useRef();
	const fetchingData = useRef<boolean>(false);

	function handleScroll() {
		if (appWrapperElement.current) {
			const { scrollTop, scrollHeight, clientHeight } =
				appWrapperElement.current;
			const isNearBottom = scrollTop + clientHeight >= scrollHeight;

			if (isNearBottom && !fetchingData.current) {
				getMoreData();
			}
		}
	}
	function getMoreData() {
		(async () => {
			fetchingData.current = true;
			const newBranches = await getData(appData.loadedData + 5); // load always 5 more
			store.dispatch(
				setLoadedData({
					newNumber: newBranches.length,
				}),
			);
			store.dispatch(
				setBranches({
					newBranches: newBranches,
				}),
			);
			fetchingData.current = false;
		})();
	}
	useEffect(() => {
		getMoreData();
	}, []);
	return (
		<div
			className="app-wrapper"
			ref={appWrapperElement}
			onScroll={handleScroll}
		>
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
		</div>
	);
}

export default App;
