import { createContext, useContext, useEffect, useRef } from "react";
import theGameLoop from "./the-game/game-loop";
import UnitsList from "./ui/UnitsList";
import GameData from "./types/gameData";

const GameDataContext = createContext<GameData>(null);

function App() {
	const gameData = useRef<GameData>(null);

	useEffect(() => {
		gameData.current = theGameLoop();

		// clears game loop, coz useEffect is called twice in development mode
		return () => {
			clearInterval(gameData.current.settings.gameLoopId);
		};
	});
	return (
		<GameDataContext.Provider value={gameData.current}>
			<div className="app">
				<h1>I&apos;m basic app</h1>
				<UnitsList />
			</div>
		</GameDataContext.Provider>
	);
}

export default App;

export function getGameData() {
	// console.log(useContext(GameDataContext));
	return useContext(GameDataContext);
}
