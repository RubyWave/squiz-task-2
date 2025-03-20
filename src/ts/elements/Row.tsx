import { useLayoutEffect, useRef } from "react";
import { Branch } from "../types/branches";
import { useAppSelector } from "../hooks";

export default function Row({ singleBranch }: { singleBranch: Branch }) {
	const elementRef = useRef(null);
	const appData = useAppSelector((state) => state.appData);

	useLayoutEffect(() => {
		const ifFirstQueriedElement =
			appData.branches.findIndex((branch) => branch.branchQueried) ===
			appData.branches.findIndex((branch) => branch === singleBranch);

		if (ifFirstQueriedElement && singleBranch.branchQueried === true) {
			elementRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	});
	return !singleBranch.hidden ? (
		<tr
			className={
				"table-row " + (singleBranch.branchQueried ? "queried-row" : "")
			}
			data-name={singleBranch.name}
			ref={elementRef}
		>
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
