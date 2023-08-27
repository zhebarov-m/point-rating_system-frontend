import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slice/sidebarSlice";
import { authReducer } from "./slice/auth";
import { useDispatch } from "react-redux";
import { authMeReducer } from "./slice/authMe";

export const store = configureStore({
  reducer: {
    sidebarOpen: sidebarSlice,
    auth: authReducer,
    authMe: authMeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
