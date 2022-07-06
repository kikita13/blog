import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../../../store/models/state";
import { Post } from "../../../../store/posts/models/posts-state";

export const UserPage = () => {
  const users = useSelector((state: State) => state.users.users);
  const { id } = useParams();
  const userId = +(id ?? 0);
  const user = users.find((user) => user.id === userId);
  // const posts = useSelector((state: State) => state.posts.posts);
  // const userPosts = posts.find((userPosts: Post) => userPosts.userId === user?.id)


  return user ? (
    <Container sx={{mt:1}}>
      {user.name}
      <br />
      {user.id}
      <br />
      {/* {userPosts?.map((post: Post) => (
        <div>{post.title}</div>))} */}
    </Container>
  ) : (
    <div>Не найден</div>
  );
};
