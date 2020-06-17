import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import {
  BATTLECHESS,
  BATTLECHESS_DESC_LONG,
  NAV_DARK,
  NAV_LIGHT,
  NAV_WHITE,
  THISHUB,
  THISHUB_DESC_LONG,
  THISHUB_GITHUB_LINK,
  BATTLECHESS_GITHUB_LINK,
} from "./constants";
import "./App.scss";
import BattleChess from "./Images/battlechess.png";
import Thishub from "./Images/thishub.png";
import ProjectOverview from "./Components/ProjectOverview/ProjectOverview";

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
        <Nav />
        <Route exact path="/">
          <div className="App">
            <Main />
            <Projects />
            <Contact />
          </div>
        </Route>
        <Route path={`/${THISHUB}`}>
          <ProjectOverview
            demo={BATTLECHESS_GITHUB_LINK}
            desc={THISHUB_DESC_LONG}
            img={Thishub}
            link={THISHUB_GITHUB_LINK}
          />
        </Route>
        <Route path={`/${BATTLECHESS}`}>
          <ProjectOverview
            desc={BATTLECHESS_DESC_LONG}
            img={BattleChess}
            link={BATTLECHESS_GITHUB_LINK}
          />
        </Route>
      </Router>
    </NavTheme.Provider>
  );
};

export default App;
