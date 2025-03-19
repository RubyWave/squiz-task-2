import BattleFieldState from "./battlefieldState";

interface GameData {
	battlefield: BattleFieldState;
	settings: {
		targetFPS: number;
		gameLoopId?: NodeJS.Timeout;
	};
}
export default GameData;
