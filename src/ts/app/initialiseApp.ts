import AppData from "../types/appData";

export default function initialiseApp(): AppData {
	const data: AppData = {
		branches: [
			// fake branches data, to show something before actuall data is fetched
			{
				id: 1,
				name: "Branch 1",
				country: "Country 1",
				industry: "Industry 1",
				numberOfEmployees: 100,
				hidden: false,
				branchQueried: false,
			},
			{
				id: 2,
				name: "Branch 2",
				country: "Country 2",
				industry: "Industry 2",
				numberOfEmployees: 200,
				hidden: false,
				branchQueried: false,
			},
			{
				id: 3,
				name: "Branch 3",
				country: "Country 3",
				industry: "Industry 3",
				numberOfEmployees: 132,
				hidden: false,
				branchQueried: false,
			},
		],
		currentSort: "default",
		loadedData: 3, // 3 inital data
	};
	return data;
}
