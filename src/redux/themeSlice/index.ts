import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface themeState {
  dark: Boolean;
  showingDetails: Boolean;
  currentItem: any;
  countries: Array<string>;
}

// Define the initial state using that type
const initialState: themeState = {
  dark: true,
  showingDetails: false,
  currentItem: null,
  countries: [],
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state) => {
      console.log("i am toggling");

      state.dark = !state.dark;
    },
    //     // Use the PayloadAction type to declare the contents of `action.payload`
    toggleShowDetails: (state, action: PayloadAction<any>) => {
      state.currentItem = action.payload;
      state.showingDetails = !state.showingDetails;

      // state = {...state, state.showingDetails = true, state}
    },
    setCountryList: (state, action?: PayloadAction<any>) => {
      state.countries = action?.payload;
      // state.showingDetails = true;

      // state = {...state, state.showingDetails = true, state}
    },
  },
});

export const { toggleTheme, toggleShowDetails, setCountryList } =
  themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const themeMode = (state: RootState) => state.themes.dark;

export default themeSlice.reducer;
