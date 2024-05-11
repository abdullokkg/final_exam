import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

interface InitialState {
  id2: Product[];
}

const initialState: InitialState = {
  id2: JSON.parse(localStorage.getItem("ids") ||  "[]"),
};

const singlSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    ID: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.id2.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.id2.unshift(action.payload);
        localStorage.setItem("ids", JSON.stringify(state.id2));
      }
    }
  },
});

export default singlSlice.reducer;
export const { ID } = singlSlice.actions;
