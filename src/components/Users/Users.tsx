import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchUsers } from "../../store/users/usersSlice";
import { UserPage } from "./pages/UserPage/UserPage";
import { UsersPage } from './pages/UsersPage/UsersPage';


export const Users = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<UsersPage/>}/>
      <Route path="/:id" element={<UserPage/>}/>
    </Routes>
  );
};


