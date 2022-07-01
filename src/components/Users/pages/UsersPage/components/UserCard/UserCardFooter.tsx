import { Typography } from "@mui/material";
import { User } from "../../../../../../store/users/models/users-state";

export const UserCardFooter = ({ user }: { user: User }) => {
  return (
    <Typography
      component="p"
      variant="caption"
      sx={{
        textAlign: "end",
      }}>
      {user.email}
    </Typography>
  );
};
