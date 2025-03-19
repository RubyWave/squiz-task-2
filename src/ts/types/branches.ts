export type Branch = {
	id: number;
	name: string;
	country: string;
	industry: string;
	numberOfEmployees: number;
	hidden: boolean; // can be set as true to hide branch, for example when querying
};

export type Branches = Array<Branch>;
