import { CardMedia } from "@mui/material";
import { URLPOST } from "../../../../consts/lunks";


export const PostCardMedia = () => {
  return (
    <CardMedia
    component="img"
    height="140"
    image={`${URLPOST}?random${Math.random()}`}
    alt="random picture"
    />
  );
};

