import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../../../store/models/state";

export const UserPage = () => {
  const users = useSelector((state: State) => state.users.users);
  const { id } = useParams();
  const userId = +(id ?? 0);
  const user = users.find((user) => user.id === userId);

  return user ? (
    <div>
      {user.name}
      <br />
      {user.id}
    </div>
  ) : (
    <div>Не найден</div>
  );
};
