import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { State } from "../../store/models/state";
import { loadPosts } from "../../store/reducers/postsSlice";


const Users = () => {
  const posts = useSelector((state: State) => state.posts.posts);
  const isLoading = useSelector((state: State) => state.posts.isLoading);

  const dispatch = useAppDispatch();

  // TODO: разобраться почему useEffect вызывается несколько раз
  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <div>
      {isLoading ? <div>ЗАГРУЗКА БЛЯТЬ</div> : ""}

      {posts.map((post) => JSON.stringify(post))}
    </div>
  );
};

export default Users;
