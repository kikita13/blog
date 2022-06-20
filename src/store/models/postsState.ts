import { Post } from "../../components/Posts/model/post";

export interface PostsState {
    posts: Post[],
    isLoading: boolean,
}