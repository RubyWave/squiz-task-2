import { Branches } from "./branches";

export type SortType =
	| "default" // sorting by ID
	| "nameASC"
	| "nameDESC"
	| "numberOfEmployeesASC"
	| "numberOfEmployeesDESC";

interface AppData {
	branches: Branches;
	currentSort: SortType;
}

export default AppData;
