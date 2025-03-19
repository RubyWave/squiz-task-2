import generateInitialBattlefield from "../initial-states/battlefield";

// this variable stores the battlefield data. Game operates on this variable, and UI (Redux slice) is refreshed every frame
const theBattlefield = generateInitialBattlefield();

export default theBattlefield;
