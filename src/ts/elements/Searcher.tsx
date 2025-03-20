/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { store } from "../store";
import { setBranches } from "../reducers/AppDataSlice";
import { useAppSelector } from "../hooks";

export default function Searcher() {
	const [query, setQuery] = useState<string>(
		sessionStorage.getItem("querySearcher") || "",
	);
	const appData = useAppSelector((state) => state.appData);

	function queryBranches(query: string) {
		const filteredBranches = appData.branches.map((branch) => {
			const checkedValue = String(branch.name);
			if (query === "") return { ...branch, branchQueried: false }; // clears if no query was provided
			if (checkedValue.toLowerCase().includes(query.toLowerCase())) {
				return { ...branch, branchQueried: true };
			} else return { ...branch, branchQueried: false };
		});
		store.dispatch(
			setBranches({
				newBranches: filteredBranches,
			}),
		);
	}
	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		queryBranches(query);
	}
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}
	React.useEffect(() => {
		sessionStorage.setItem("querySearcher", query);
	}, [query]);
	return (
		<form onSubmit={handleSubmit} className="searcher">
			<label>
				<span>Name</span>
				<input type="text" value={query} onChange={onChange} />
			</label>
			<button type="submit">Search</button>
		</form>
	);
}
