import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post, PostsState } from "./models/posts-state";

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data;
  }
);

const initialState: PostsState = {
  posts: [],
  status: null,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts(state) {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, actoin) => {
      state.status = "Ответ получен";
      state.posts = actoin.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = "Ошибка";
    });
  },
});

export const { clearPosts } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
