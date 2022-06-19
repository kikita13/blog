import { combineReducers, configureStore } from "@reduxjs/toolkit";

import Posts from "../Posts/Posts";
import Users from "../Users/Users";



const rootReducer = combineReducers({
    Posts:  Posts,
    Users: Users
});

const Store = configureStore({
    rootReducer
})

export default (rootReducer) (Store)
