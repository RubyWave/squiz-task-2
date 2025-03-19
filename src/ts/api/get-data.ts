import { Branch, Branches } from "../types/branches";

export default async function getData(
	numberOfDataToFetch: number,
): Promise<Branches> {
	const response = await fetch(
		"https://dujour.squiz.cloud/developer-challenge/data",
	);
	let data = await response.json();
	data.splice(numberOfDataToFetch);
	data = data.map((singleBranch: Branch) => {
		singleBranch.hidden = false;
		return singleBranch;
	});
	return data;
}
