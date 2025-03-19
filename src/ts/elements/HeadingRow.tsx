import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import AppData, { SortType } from "../types/appData";
import { store } from "../store";
import { setBranches, setSorting } from "../reducers/AppDataSlice";
import sortBranches from "../app/sortBranches";

function SingleHeading({
	children,
	sortings,
}: {
	children: React.ReactNode;
	sortings?: Array<SortType>;
}) {
	const appData: AppData = useAppSelector((state) => state.appData);
	const [arrowToShow, setArrowToShow] = useState<string>("");

	function handleClick() {
		let newSorting: SortType;
		if (sortings) {
			if (appData.currentSort === "default") {
				newSorting = sortings.find((e) => e.endsWith("ASC"));
			} else if (appData.currentSort.endsWith("ASC")) {
				newSorting = sortings.find((e) => e.endsWith("DESC"));
			} else if (appData.currentSort.endsWith("DESC")) {
				newSorting = "default";
			}
			store.dispatch(
				setBranches({
					newBranches: sortBranches(appData, newSorting),
				}),
			);
			store.dispatch(
				setSorting({
					newSorting: newSorting,
				}),
			);
		}
	}
	useEffect(() => {
		if (sortings && sortings.includes(appData.currentSort)) {
			if (appData.currentSort.endsWith("DESC")) {
				setArrowToShow("↑");
			} else if (appData.currentSort.endsWith("ASC")) {
				setArrowToShow("↓");
			}
		} else setArrowToShow("");
	});
	return (
		<th className={sortings ? "sorting-header" : ""} onClick={handleClick}>
			<span className="sorting-header__label">{children}</span>
			<span className="sorting-header__arrow">{arrowToShow}</span>
		</th>
	);
}
export default function HeadingRow() {
	return (
		<tr>
			<SingleHeading>ID</SingleHeading>
			<SingleHeading sortings={["nameASC", "nameDESC"]}>
				Name
			</SingleHeading>
			<SingleHeading>Country</SingleHeading>
			<SingleHeading>Industry</SingleHeading>
			<SingleHeading
				sortings={["numberOfEmployeesASC", "numberOfEmployeesDESC"]}
			>
				Number of Employees
			</SingleHeading>
		</tr>
	);
}
