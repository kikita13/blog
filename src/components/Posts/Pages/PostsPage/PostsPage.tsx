import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { State } from "../../../../store/models/state";
import { Post } from "../../../../store/posts/models/posts-state";
import { fetchPosts, clearPosts } from "../../../../store/posts/postsSlice";
import { PostCard } from "./components/PostCard/PostCard";
import { PostsSearch } from "./components/PostsSearch";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: State) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const [value, setValue] = useState("");

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <Container>
      <button onClick={dispatch(clearPosts as any)}>clear posts</button>
      <PostsSearch value={value} setValue={setValue}/>
      <Container 
        sx={{ 
          mt: 1, 
        }}>
        <Grid 
          container 
          spacing={2}
          >
          {filteredPosts.map((post: Post) => (
            <PostCard 
              post={post} 
              key={post.id}/>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
