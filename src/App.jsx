import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import { BATTLECHESS, THISHUB } from "./constants";
import "./App.scss";

export const NavTheme = createContext();

const App = () => {
  const [navTheme, setNavTheme] = useState(false);
  const handleScroll = () => {
    if (window.scrollY < 229) {
      setNavTheme(false);
    } else if (window.scrollY >= 230) {
      setNavTheme(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavTheme.Provider value={{ navTheme, setNavTheme }}>
      <Router>
        <Route exact path="/">
          <div className="App">
            <Nav />
            <Main />
            <Projects />
          </div>
        </Route>
        <Route exact path={`/${THISHUB}`} />
        <Route exact path={`/${BATTLECHESS}`} />
      </Router>
    </NavTheme.Provider>
  );
};

export default App;
