import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { State } from "../../store/models/state";
import { User } from "../../store/users/models/users-state";
import { fetchUsers } from "../../store/users/usersSlice";


const Users = () => {
  const users = useSelector((state: State) => state.users.users);
  const status = useSelector((state: State) => state.users.status);
  const dispatch = useAppDispatch();

  // // TODO: разобраться почему useEffect вызывается несколько раз
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {status}
      {users.map((user: User) => (
        <div key={user.id}>{user.id}</div>
      ))}

      {/* {isLoading ? <div>ЗАГРУЗКА БЛЯТЬ</div> : ""}

      {posts.map((post) => JSON.stringify(post))} */}
    </div>
  );
};

export default Users;
