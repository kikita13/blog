import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../../../../../store/posts/models/posts-state";
import { PostCardContent } from "./PostCardContent";
import { PostCardMedia } from "./PostCardMedia";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Grid 
      item 
      lg={4} 
      md={6} 
      xs={12}>
      <Link to={`./${post.id}`}>
        <Card>
          <PostCardMedia />
          <PostCardContent post={post}/>
        </Card>
      </Link>
    </Grid>
  );
};
