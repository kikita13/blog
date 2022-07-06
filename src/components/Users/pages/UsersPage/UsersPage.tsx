import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { State } from "../../../../store/models/state";
import { User } from "../../../../store/users/models/users-state";
import { UserCard } from "./components/UserCard/UserCard";
import {fetchUsers } from "../../../../store/users/usersSlice";
import { UsersSearch } from "./components/UsersSearch";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useSelector((state: State) => state.users.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
 
  const [value, setValue] = useState("");

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <Container
      sx={{
        mt: 1,
      }}
    >
      <UsersSearch value={value} setValue={setValue}/>
      <Grid container spacing={2}>
        {filteredUsers.map((user: User) => (
          <UserCard user={user} />
        ))}
      </Grid>
    </Container>
  );
};
