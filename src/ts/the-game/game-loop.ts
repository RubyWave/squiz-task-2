/**
 * Main game loop, used to refresh redux store to update the UI
 *
 * return handle to next loop iteration
 */

// import { useAppDispatch } from "../hooks";
import { syncBattlefieldData } from "../reducers/BattlefieldSlice";
import { store } from "../store";
import GameData from "../types/gameData";
import initaliseGame from "./game-initialisation";

const gameData: GameData = initaliseGame();

/**
 * Main function of the game
 * @returns whole game data
 */
function theGameLoop(): GameData {
	// const dispatch = useAppDispatch();

	const intervalLoop = setInterval(() => {
		console.log("single game loop");
		// dispatch(
		// 	syncBattlefieldData({
		// 		newGameData: gameData,
		// 	}),
		// );
		store.dispatch(
			syncBattlefieldData({
				newGameData: gameData,
			}),
		);
		console.log(gameData);
	}, 1000 / gameData.settings.targetFPS);
	gameData.settings.gameLoopId = intervalLoop;
	return gameData;
}

export default theGameLoop;
