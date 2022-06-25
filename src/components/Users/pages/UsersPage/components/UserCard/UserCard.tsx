import { Card, CardContent, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { User } from "../../../../../../store/users/models/users-state";
import { UserCardAvatar } from "./UserCardAvatar";
import { UserCardBody } from "./UserCardBody";
import { UserCardFooter } from "./UserCardFooter";
import { UserCardMedia } from "./UserCardMedia";
import { UserCardTitle } from "./UserCardTitle";

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Grid key={user.id} item xs={12} md={6}>
      <Card>
        <UserCardMedia />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              mb: 2,
            }}
            >
            <UserCardTitle user={user}/>
            <UserCardAvatar user={user}/>
          </Box>
        <Divider />
        <UserCardBody user={user}/>
        <Divider />
        <UserCardFooter user={user}/>
        </CardContent>
      </Card>
    </Grid>
  );
};
