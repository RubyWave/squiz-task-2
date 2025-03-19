import { useAppSelector } from "../hooks";
import { Branch } from "../types/branches";
import HeadingRow from "./HeadingRow";
import Row from "./Row";

export default function Table() {
	const appData = useAppSelector((state) => state.appData);
	return (
		<table className="main-table">
			<thead>
				<HeadingRow />
			</thead>
			<tbody>
				{appData.branches.map((singleBranch: Branch) => (
					<Row key={singleBranch.id} singleBranch={singleBranch} />
				))}
			</tbody>
		</table>
	);
}
