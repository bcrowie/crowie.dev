import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import {
  BATTLECHESS,
  NAV_DARK,
  NAV_LIGHT,
  NAV_WHITE,
  THISHUB,
} from "./constants";
import "./App.scss";

export const NavTheme = createContext();

const App = () => {
  const [navTheme, setNavTheme] = useState("white");

  const handleScroll = () => {
    if (window.scrollY < 489) {
      setNavTheme(NAV_WHITE);
    } else if (window.scrollY >= 490 && window.scrollY <= 1335) {
      setNavTheme(NAV_DARK);
    } else if (window.scrollY >= 1336) {
      setNavTheme(NAV_LIGHT);
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
            <Contact />
          </div>
        </Route>
        <Route exact path={`/${THISHUB}`} />
        <Route exact path={`/${BATTLECHESS}`} />
      </Router>
    </NavTheme.Provider>
  );
};

export default App;
