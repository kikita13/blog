import { CardMedia } from "@mui/material";
import React from "react";
import { URLPOST } from "../../../../consts/links";


export const UserCardMedia = () => {
  return (
    <CardMedia 
        src={`${URLPOST}?random=${Math.random()}`} 
        component="img" />
  );
};
