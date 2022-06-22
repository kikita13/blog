export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
};

export interface PostsState {
    posts: Post[],
    status: (string | null),
    error: (string | null),
};
