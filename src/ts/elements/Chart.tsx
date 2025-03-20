import { PieChart } from "react-minimal-pie-chart";
import { useAppSelector } from "../hooks";
import seedrandom from "seedrandom";
import { useState } from "react";
import { store } from "../store";
import { setBranches } from "../reducers/AppDataSlice";

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
	const chartData = filteredBranches.map((singleBranch) => {
		if (singleBranch.hidden) return null;
		return {
			title: singleBranch.name,
			value: singleBranch.numberOfEmployees,
			color: getRandomColor(singleBranch.name),
		};
	});

	function handleChartClick(query: string) {
		const filteredBranches = appData.branches.map((branch) => {
			const checkedValue = String(branch.name);
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
				Number of workers per branch
			</span>
			<PieChart
				className="pie-chart__itself"
				data={chartData}
				segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
				segmentsShift={(index) => (index === selected ? 4 : 1)}
				onClick={(event, index) => {
					setSelected(index === selected ? undefined : index);
					handleChartClick(chartData[index].title);
				}}
				radius={30}
				label={({ dataEntry }) => dataEntry.title}
				labelPosition={112}
				labelStyle={{
					fontSize: "2px",
				}}
			/>
		</div>
	);
}
