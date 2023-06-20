import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0
};

export const counter = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		reset: () => initialState,
		increment: (state) => {
			state.value = state.value + 1;
		},
		decrement: (state) => {
			state.value = state.value - 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value = state.value + action.payload;
		},
		decrementByAmount: (state, action: PayloadAction<number>) => {
			state.value = state.value - action.payload;
		}
	}
});

export const { increment, incrementByAmount, decrementByAmount, decrement, reset } = counter.actions;
export default counter.reducer;
