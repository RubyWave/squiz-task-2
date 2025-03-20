import { SortType } from "../types/appData";
import { Branches } from "../types/branches";

export default function sortBranches(
	branchesToSort: Branches,
	sortingMode: SortType,
) {
	const branchesCopy = [...branchesToSort];
	let sortedBranches;
	switch (sortingMode) {
		case "default": // sorts by ID
			sortedBranches = branchesCopy.sort((a, b) => a.id - b.id);
			break;
		case "nameASC":
			sortedBranches = branchesCopy.sort((a, b) =>
				a.name.localeCompare(b.name),
			);
			break;
		case "nameDESC":
			sortedBranches = branchesCopy.sort((a, b) =>
				b.name.localeCompare(a.name),
			);
			break;
		case "numberOfEmployeesASC":
			sortedBranches = branchesCopy.sort(
				(a, b) => a.numberOfEmployees - b.numberOfEmployees,
			);
			break;
		case "numberOfEmployeesDESC":
			sortedBranches = branchesCopy.sort(
				(a, b) => b.numberOfEmployees - a.numberOfEmployees,
			);
			break;
	}
	return sortedBranches;
}
