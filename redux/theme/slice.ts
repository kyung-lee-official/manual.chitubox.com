import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeState {
	currentTheme: "dark" | "light",
	themeList: { theme: string; }[];

}

const initialState: themeState = {
	currentTheme: "dark",
	themeList: [
		{ theme: "light" },
		{ theme: "dark" }
	]
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state: themeState, action: PayloadAction<"dark" | "light">) => {
			state.currentTheme = action.payload;
		}
	}
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
