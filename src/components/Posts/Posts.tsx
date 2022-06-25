import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/models/state";
import { useAppDispatch } from "../../store";
import { fetchPosts } from "../../store/posts/postsSlice";
import { fetchUsers } from "../../store/users/usersSlice";
import { Post } from "../../store/posts/models/posts-state";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { User } from "../../store/users/models/users-state";


const Posts = () => {
  const posts = useSelector((state: State) => state.posts.posts);
  const users = useSelector((state: State) => state.users.users);
  const dispatch = useAppDispatch();
  const url = "https://picsum.photos/345/140";

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container
      sx={{
        mt: 1,
        bgcolor: "#ebebeb",
      }}
      >
      <Grid container spacing={2}>
          {posts.map((post: Post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    component="img"
                    height="140"
                    image={url}
                    alt="random picture"
                    />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{ textTransform: "uppercase" }}
                      >
                      {post.title}
                    </Typography>
                    <Divider />
                    <Typography>{post.body}</Typography>
                    <Divider />
                    {users.map((user: User) => (<Typography key={user.id} variant="caption">{user.name}</Typography>))}
                    
                  </CardContent>
                </Card>
        </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Posts;
