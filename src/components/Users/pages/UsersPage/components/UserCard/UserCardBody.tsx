import { Typography } from "@mui/material";
import { User } from "../../../../../../store/users/models/users-state";


export const UserCardBody = ({ user }: { user: User }) => {
  return (
    <Typography
      sx={{
        textAlign: "end",
      }}
    >
      {user.website}
    </Typography>
  );
};
