import React from "react";
import "./App.css";
import { Nav } from './components/Nav/Nav'

const App = () => {
  return (
    <div>
      <Nav
        window={window}
      ></Nav>
    </div>
  );
};

export default App;
