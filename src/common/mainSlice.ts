import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  propToast: {
    title: string;
    status: string;
    placement: string;
  };
}

const initialState: ExampleState = {
  propToast: {
    title: "",
    status: "",
    placement: "",
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetToast: (state, actions: PayloadAction<any>) => {
      return { ...state, propToast: actions.payload };
    },
  },
});

export const { RsetToast } = mainSlice.actions;

export default mainSlice.reducer;
