import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../../../store/models/state";
import { Post } from "../../../../store/posts/models/posts-state";
import { User } from "../../../../store/users/models/users-state";

export const PostPage = () => {
  
  const posts = useSelector((state: State) => state.posts.posts);
  const users = useSelector((state: State) => state.users.users);
  const { id } = useParams();
  const postId = +(id ?? 0);
  const post = posts.find((post: Post) => post.id === postId);
  const user = users.find((user: User) => user.id === post?.userId)

  return post ? (
    <Container>
      <Box>
       @{user?.name}
        <br/>
        {post.title}
        <br/>
        {post.body}
        <br/>
       {user?.email}
       </Box>
    </Container>
  ) : (
    <div>Не найден</div>
  );
};
