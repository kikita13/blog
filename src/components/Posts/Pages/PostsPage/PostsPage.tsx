import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useDebounce } from "@react-hook/debounce";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { State } from "../../../../store/models/state";
import { Post } from "../../../../store/posts/models/posts-state";
import { fetchPosts, clearPosts } from "../../../../store/posts/postsSlice";
import { PostCard } from "./components/PostCard/PostCard";
import { PostsSearch } from "./components/PostsSearch";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts: Post[] = useSelector((state: State) => state.posts.posts);
  const [debouncedValue, setDebouncedValue] = useDebounce("", 200);
  const [value, setValue] = useState('');

  const filteredPosts = posts.filter((post: Post) => {
    return post.title.toLowerCase().includes(debouncedValue.toLowerCase())
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <PostsSearch value={value} setValue={(newValue: string) => {
        setValue(newValue);
        setDebouncedValue(newValue);
      }}/>
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
