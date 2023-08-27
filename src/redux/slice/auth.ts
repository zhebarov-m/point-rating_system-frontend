import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export interface iFormValues {
  email: string;
  password: string;
}

export const fetchAuth = createAsyncThunk(
  "auth/fetchUserData",
  async (params: iFormValues) => {
    try {
      const { data } = await axios.post("/auth", params);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  }, // Если у вас будут другие reducers, добавьте их сюда

  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});



export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
