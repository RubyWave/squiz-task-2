import { useAppSelector } from "../hooks";
import { Branch } from "../types/branches";
import Row from "./Row";

export default function Table() {
	const appData = useAppSelector((state) => state.appData);
	return (
		<table className="main-table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Country</th>
					<th>Industry</th>
					<th>Number of Employees</th>
				</tr>
			</thead>
			<tbody>
				{appData.branches.map((singleBranch: Branch) => (
					<Row key={singleBranch.id} singleBranch={singleBranch} />
				))}
			</tbody>
		</table>
	);
}
