import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import AppData, { SortType } from "../types/appData";
import initialiseApp from "../app/initialiseApp";
import { Branches } from "../types/branches";

const emptyAppData: AppData = initialiseApp();

export const appDataSlice = createSlice({
	name: "appData",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState: emptyAppData, //initial state is same as initial variable
	reducers: {
		setBranches: (
			state,
			action: PayloadAction<{
				newBranches: Branches;
			}>,
		) => {
			return { ...state, branches: action.payload.newBranches };
		},
		setSorting: (
			state,
			action: PayloadAction<{
				newSorting: SortType;
			}>,
		) => {
			return { ...state, currentSort: action.payload.newSorting };
		},
		setLoadedData: (
			state,
			action: PayloadAction<{
				newNumber: number;
			}>,
		) => {
			return { ...state, loadedData: action.payload.newNumber };
		},
	},
});

export const { setBranches, setSorting, setLoadedData } = appDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppData = (state: RootState) => state.appData;

export default appDataSlice.reducer;
