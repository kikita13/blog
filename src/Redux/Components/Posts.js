import React, { useEffect, useState } from "react";

const [posts, setPosts] = useState([]);

const Posts = useEffect(
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => result.json)
    .then((data) => setPosts(data))
    .catch((error) => error)
);

export default Posts;
