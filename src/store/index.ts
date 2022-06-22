import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { State } from "./models/state";
import { postsReducer } from "./posts/postsSlice";
import { usersReducer } from "./users/usersSlice";

export const store = configureStore<State>({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
