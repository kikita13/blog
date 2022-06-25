import { PostsState } from "../posts/models/posts-state";
import { UsersState } from "../users/models/users-state";

export interface State {
    posts: PostsState,
    users: UsersState,
}
