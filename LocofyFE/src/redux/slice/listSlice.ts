import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { act } from "react-dom/test-utils";

// Define a type for the slice state
interface CounterState {
  activeNumber: number;
  records: any[];
  activeRecord?: any;
}

// Define the initial state using that type
const initialState: CounterState = {
  activeNumber: 0,
  activeRecord: {},
  records: [],
};

export const listSlice = createSlice({
  name: "list",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    search: (state, action: PayloadAction<any>) => {
      let arr = state.records.filter((el) => el.company === action.payload);
      if (arr.length > 0) {
        state.activeRecord = arr[0];
      }
    },
    setRecords: (state, action: PayloadAction<any[]>) => {
      state.records = action.payload;
      state.activeRecord = action.payload[0];
    },
    next: (state) => {
      if (state.activeNumber !== state.records.length - 1) {
        state.activeNumber = state.activeNumber + 1;
        state.activeRecord = state.records[state.activeNumber];
      }
    },
    prev: (state) => {
      if (state.activeNumber > 0) {
        state.activeNumber = state.activeNumber - 1;
        state.activeRecord = state.records[state.activeNumber];
      }
    },
  },
});

export const { setRecords, next, prev, search } = listSlice.actions;

export default listSlice.reducer;
