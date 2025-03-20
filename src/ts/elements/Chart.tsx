import { PieChart } from "react-minimal-pie-chart";
import { useAppSelector } from "../hooks";
import seedrandom from "seedrandom";
import { useState } from "react";
import { store } from "../store";
import { setBranches } from "../reducers/AppDataSlice";

interface ChartData {
	name: string; // country
	value: number; // amount of employees
	color: string;
}

export default function Chart() {
	const appData = useAppSelector((state) => state.appData);
	const [selected, setSelected] = useState<number | undefined>(0);

	function getRandomColor(seed: string) {
		let color =
			"#" + Math.floor(seedrandom(seed)() * 16777215).toString(16);
		if (color.length < 7)
			// sometimes it can output to short colors, with this, it should handle such rare cases
			color =
				color + Math.floor(seedrandom(seed)() * 16777215).toString(16);

		color = color.slice(0, 7);
		return color;
	}
	const filteredBranches = appData.branches.filter((singleBranch) => {
		if (singleBranch.hidden) return false;
		else return true;
	});
	const chartData: Array<ChartData> = [];

	filteredBranches.forEach((branch) => {
		const existingData = chartData.find(
			(data) => data.name === branch.country,
		);
		if (existingData) {
			existingData.value += branch.numberOfEmployees;
		} else {
			chartData.push({
				name: branch.country,
				value: branch.numberOfEmployees,
				color: getRandomColor(branch.name),
			});
		}
	});

	chartData.sort((a, b) => b.value - a.value);

	function handleChartClick(query: string) {
		const filteredBranches = appData.branches.map((branch) => {
			const checkedValue = String(branch.country);
			if (query === "") return { ...branch, branchQueried: false }; // clears if no query was provided
			if (checkedValue.toLowerCase().includes(query.toLowerCase())) {
				return { ...branch, branchQueried: true };
			} else return { ...branch, branchQueried: false };
		});
		store.dispatch(
			setBranches({
				newBranches: filteredBranches,
			}),
		);
	}
	return (
		<div className="pie-chart">
			<span className="pie-chart__label">
				Number of workers per country
			</span>
			<PieChart
				className="pie-chart__itself"
				data={chartData}
				segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
				segmentsShift={(index) => (index === selected ? 4 : 1)}
				onClick={(event, index) => {
					setSelected(index === selected ? undefined : index);
					handleChartClick(chartData[index].name);
				}}
				radius={30}
				label={({ dataEntry }) =>
					dataEntry.name + ": " + dataEntry.value
				}
				labelPosition={112}
				labelStyle={{
					fontSize: "2px",
				}}
			/>
		</div>
	);
}
