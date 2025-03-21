import React, { useState } from "react";
import { store } from "../store";
import { setBranches } from "../reducers/AppDataSlice";
import { useAppSelector } from "../hooks";

export default function Filter({
	label,
	fieldToSearch,
}: {
	label: string;
	fieldToSearch: string;
}) {
	const [query, setQuery] = useState<string>(
		sessionStorage.getItem("query" + fieldToSearch) || "",
	);

	const appData = useAppSelector((state) => state.appData);

	function queryBranches(query: string) {
		const filteredBranches = appData.branches.map((branch) => {
			const checkedValue = String(
				branch[fieldToSearch as keyof typeof branch],
			);
			if (checkedValue.toLowerCase().includes(query.toLowerCase())) {
				return { ...branch, hidden: false };
			} else return { ...branch, hidden: true };
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
		queryBranches(e.target.value);
	}
	React.useEffect(() => {
		sessionStorage.setItem("query" + fieldToSearch, query);
	}, [query]);
	return (
		<form onSubmit={handleSubmit} className="filter">
			<label>
				<span>{label}</span>
				<input type="text" value={query} onChange={onChange} />
			</label>
			<button type="submit">Filter</button>
		</form>
	);
}
