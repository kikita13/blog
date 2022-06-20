import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../components/Posts/model/post";
import { PostsState } from "../models/postsState";


const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

/**
 * Standard actions:
 */

const clearPosts: CaseReducer<PostsState> = (state) => {
  state.posts = [];
};

const updatePost: CaseReducer<PostsState, PayloadAction<Post>> = (
  state,
  { payload: updatedPost }
) => {
  state.posts = state.posts.map((p) =>
    p.id === updatedPost.id ? updatedPost : p
  );
};

/**
 * Thunks:
 */

export const loadPosts = createAsyncThunk<Post[]>(
  'loadPosts',
  async () => {
    const posts: Post[] = await new Promise((resolve) => {
      console.log('Запрашивую сервер');
      
      setTimeout(() => {
        resolve([{id: 1, userId: 919128491234}]);
      }, 5000);
    });

    return posts;
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts,
    updatePost,
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });

    builder.addCase(loadPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
