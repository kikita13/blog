import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./Pages/PostsPage/PostsPage";
import { PostPage } from "./Pages/PostPage/PostPage";
import { fetchPosts } from "../../store/posts/postsSlice";
import { useAppDispatch } from "../../store";
import { fetchUsers } from "../../store/users/usersSlice";


export const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<PostsPage/>}/>
      <Route path="/:id" element={<PostPage/>}/>
    </Routes>
  );
};


