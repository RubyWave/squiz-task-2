import { useAppSelector } from "../hooks";
import { getGameData } from "../App";
import { useEffect } from "react";

function UnitsList() {
	const battlefield = useAppSelector((state) => state.battlefield);
	const gameData = getGameData();

	function onClick(unitName: string) {
		gameData.battlefield.units[1].attack = 3;
		console.log(unitName);
	}
	useEffect(() => {
		console.log("game data:");
		console.log(gameData);
	});
	return (
		<ul>
			{battlefield.units.map((unit) => (
				<li key={unit.name} onClick={() => onClick(unit.name)}>
					<span>
						{unit.prettyName}:{unit.attack}
					</span>
				</li>
			))}
		</ul>
	);
}

export default UnitsList;
