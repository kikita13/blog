import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { State } from "../../../../store/models/state";
import { Post } from "../../../../store/posts/models/posts-state";
import { fetchPosts } from "../../../../store/posts/postsSlice";
import { PostCard } from "./components/PostCard/PostCard";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: State) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container 
      sx={{ 
        mt: 1, 
        bgcolor: "#ebebeb" 
      }}>
      <Grid 
        container 
        spacing={2}
        >
        {posts.map((post: Post) => (
          <PostCard 
            post={post} 
            key={post.id}/>
        ))}
      </Grid>
    </Container>
  );
};
