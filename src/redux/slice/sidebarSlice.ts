import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface iSidebarState {
  open: boolean;
}

const initialState: iSidebarState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    handleDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    handleDrawerClose: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { handleDrawerOpen, handleDrawerClose } = sidebarSlice.actions;

export default sidebarSlice.reducer;
