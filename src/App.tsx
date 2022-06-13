import React, { useEffect, useState } from "react";
import "./App.css";
import "./css/Posts.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="content">
        {posts.map((posts) => (
          <>
            <div className="posts">
              <Accordion>
                <AccordionSummary
                  className="posts__title"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                 {posts.id}. {posts.title}
                </AccordionSummary>
                <AccordionDetails className="posts__body">{posts.body}</AccordionDetails>
              </Accordion>
            </div>

            {/* <div className="posts">
              <div className="posts__header">
                Пост № {posts.id}, написанный пользователем {posts.userId}
              </div>
              <div className="posts__title" key={posts.id}>
                {posts.title}
              </div>
              <div className="posts__body">{posts.body}</div>
            </div> */}
          </>
        ))}
      </div>
    );
  }
}

export default App;
