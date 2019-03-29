import React from "react";
import "./App.css";
import ReadingProgress from "./components/ReadingProgress";
import Article from "./components/Article";

const App = props => {
  return (
    <div className="App">
      <ReadingProgress />
      <Article />
    </div>
  );
};

export default App;
