import React, { useState, useEffect } from 'react';
import "./Posts.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Post} from './model/post'

const Posts = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<any[]>([]);
  
    const getData = (type: any) =>
      fetch(`https://jsonplaceholder.typicode.com/${type}`).then((res) =>
        res.json()
      );
  
    useEffect(() => {
      Promise.all(["posts", "users"].map(getData)).then(
        ([posts, users]) => {
          setIsLoaded(true);
          const usersObj = Object.fromEntries(
            users.map((user: { id: any }) => [user.id, user])
          );
          setData(
            posts.map((post: Post) => ({
              post,
              user: usersObj[post.userId],
            }))
          );
        },
        (error) => setError(error)
      );
    }, []);
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="posts">
          {data.map(({ post, user }) => (

              <Accordion key={post.id} className="post">
                <AccordionSummary
                  className="post__title"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {post.id}. {post.title} {user.name}
                </AccordionSummary>
                <AccordionDetails className="post__body">
                  {post.body}
                </AccordionDetails>
              </Accordion>

          ))}
        </div>
      );
    }
};

export default Posts;