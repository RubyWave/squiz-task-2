import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import GameData from "../types/gameData";
import generateInitialBattlefield from "../initial-states/battlefield";

export const battlefieldSlice = createSlice({
	name: "battlefield",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState: generateInitialBattlefield(), //initial state is same as initial variable
	reducers: {
		syncBattlefieldData: (
			state,
			action: PayloadAction<{
				newGameData: GameData;
			}>,
		) => {
			state = action.payload.newGameData.battlefield;
		},
	},
});

export const { syncBattlefieldData } = battlefieldSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBattlefield = (state: RootState) => state.battlefield;

export default battlefieldSlice.reducer;
