import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./NotFoundPage.css";

const NotFoundPage = () => {

  return (
    
    <div className="NotFoundPage">
      <Link to='Posts'>
      <div className="Btn">
        <div className="Btn__text">Где это я?</div>
      </div>
      </Link>
      <div className="Footer">
        <span className="Footer__text">
          Да, Вы как всегда правы. Вы попали на несуществующую страницу.
          <p>Прошу, уйдите отсюда.</p>
        </span>
      </div>
      <Routes>
        <Route path="Posts" element={<Posts />}/>
      </Routes>
    </div>
  );
};

export default NotFoundPage;
