import React, { useEffect, useState } from "react";

const [users, setUsers] = useState([]);

const Users = useEffect(
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => result.json)
    .then((data) => setUsers(data))
    .catch((error) => error)
);

export default Users;
