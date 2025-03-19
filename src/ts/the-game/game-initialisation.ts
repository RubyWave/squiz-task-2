import generateInitialBattlefield from "../initial-states/battlefield";
import GameData from "../types/gameData";

/**
 * Initialise wole game with data and whatnot.
 * @returns data for entire game
 */
function initaliseGameData(): GameData {
	const gameData: GameData = {
		battlefield: generateInitialBattlefield(),
		settings: {
			targetFPS: 5,
		},
	};
	return gameData;
}

export default initaliseGameData;
