import { CardContent, Divider, Typography } from "@mui/material";
import { Post } from "../../../../../../store/posts/models/posts-state";

export const PostCardContent = ({post}: {post: Post}) => {
  return (
    <CardContent>
      <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
        {post.title}
      </Typography>
      <Divider />
      <Typography>{post.body}</Typography>
    </CardContent>
  );
};
