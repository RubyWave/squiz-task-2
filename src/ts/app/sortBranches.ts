import AppData, { SortType } from "../types/appData";

export default function sortBranches(appData: AppData, sortingMode: SortType) {
	const branchesCopy = [...appData.branches];
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
