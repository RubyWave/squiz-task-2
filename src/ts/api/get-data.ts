import { Branches } from "../types/branches";

export default async function getData(
	numberOfDataToFetch: number,
): Promise<Branches> {
	console.log(numberOfDataToFetch);
	const response = await fetch(
		"https://dujour.squiz.cloud/developer-challenge/data",
	);
	const data = await response.json();
	data.splice(numberOfDataToFetch);
	return data;
}
