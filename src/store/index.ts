import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import postsReducer from "./reducers/postsSlice";

const reducer = combineReducers({
    posts: postsReducer
});

const store = configureStore({
    reducer
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
