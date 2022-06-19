import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {

  return (
    
    <div className="NotFoundPage">
      <div className="Btn">
        <div className="Btn__text">Где это я?</div>
      </div>
      <div className="Footer">
        <span className="Footer__text">
          Да, Вы как всегда правы. Вы попали на несуществующую страницу.
          <p>Прошу, уйдите отсюда.</p>
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
