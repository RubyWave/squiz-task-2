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
	loadedData: number; // number of loaded data, it should start with 8
}

export default AppData;
