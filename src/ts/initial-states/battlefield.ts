import BattleFieldState from "../types/battlefieldState";
import peasantJSON from "../../../common/units/peasant.json";
import impJSON from "../../../common/units/imp.json";

function generateInitialBattlefield(): BattleFieldState {
	const battlefieldState: BattleFieldState = {
		units: [peasantJSON, impJSON],
	};
	return battlefieldState;
}

export default generateInitialBattlefield;
