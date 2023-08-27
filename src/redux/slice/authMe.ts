import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCheckAuth = createAsyncThunk(
  "auth/fetchCheckAuth",
  async () => {
    try {
      const { data } = await axios.get("/auth_me");

      return data;
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authMeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}, // Если у вас будут другие reducers, добавьте их сюда

  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckAuth.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const authMeReducer = authMeSlice.reducer;
