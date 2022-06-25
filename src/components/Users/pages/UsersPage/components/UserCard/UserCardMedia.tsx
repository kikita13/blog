import { CardMedia } from "@mui/material";
import React from "react";
import { urlpost } from "../../../../consts/links";


export const UserCardMedia = () => {
  return (
    <CardMedia 
        src={`${urlpost}?random=${Math.random()}`} 
        component="img" />
  );
};
