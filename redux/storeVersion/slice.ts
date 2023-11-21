import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StoreVersion {
	storeVersion: number,
}

export const initialState: StoreVersion = {
	storeVersion: 0 + 1,
};

export const storeVersionSlice = createSlice({
	name: "storeVersion",
	initialState,
	reducers: {
		changeStoreVersion: (state: StoreVersion, action: PayloadAction<number>) => {
			state.storeVersion = action.payload;
		}
	}
});

export const { changeStoreVersion } = storeVersionSlice.actions;

export default storeVersionSlice.reducer;
