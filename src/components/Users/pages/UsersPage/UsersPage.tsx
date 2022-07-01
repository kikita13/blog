import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { State } from "../../../../store/models/state";
import { User } from "../../../../store/users/models/users-state";
import { UserCard } from "./components/UserCard/UserCard";
import {fetchUsers } from "../../../../store/users/usersSlice";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useSelector((state: State) => state.users.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container
      sx={{
        mt: 1,
        bgcolor: "#ebebeb",
      }}
    >
      <Grid container spacing={2}>
        {users.map((user: User) => (
          <UserCard user={user} />
        ))}
      </Grid>
    </Container>
  );
};
