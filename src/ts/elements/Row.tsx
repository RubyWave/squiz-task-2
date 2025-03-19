import { Branch } from "../types/branches";

export default function Row({ singleBranch }: { singleBranch: Branch }) {
	return !singleBranch.hidden ? (
		<tr className="table-row">
			<td>{singleBranch.id}</td>
			<td>{singleBranch.name}</td>
			<td>{singleBranch.country}</td>
			<td>{singleBranch.industry}</td>
			<td>{singleBranch.numberOfEmployees}</td>
		</tr>
	) : (
		<></>
	);
}
