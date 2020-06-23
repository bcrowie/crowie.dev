import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import {
  BATTLECHESS,
  BATTLECHESS_DESC_LONG,
  BATTLECHESS_GITHUB_LINK,
  NAV_DARK,
  NAV_LIGHT,
  NAV_WHITE,
  PORTFOLIO,
  PORTFOLIO_DESC_LONG,
  PORTFOLIO_GITHUB_LINK,
  SPOTIFY_TOOL,
  SPOTIFY_TOOL_DESC_LONG,
  SPOTIFY_TOOL_GITHUB_LINK,
  THISHUB,
  THISHUB_DESC_LONG,
  THISHUB_GITHUB_LINK,
} from "./constants";
import "./App.scss";
import BattleChess from "./Images/battlechess-laptop.png";
import Portfolio from "./Images/portfolio-laptop.png";
import Spotify_Tool from "./Images/spotify-tool-laptop.png";
import Thishub from "./Images/thishub-laptop.png";
import ProjectOverview from "./Components/ProjectOverview/ProjectOverview";

export const NavTheme = createContext();

const App = () => {
  const [navTheme, setNavTheme] = useState("white");
  const mobile = window.innerWidth <= 900;

  const handleScroll = () => {
    if ((window.scrollY < 489 && !mobile) || (window.scrollY < 669 && mobile)) {
      setNavTheme(NAV_WHITE);
    } else if (
      (window.scrollY >= 490 && window.scrollY <= 1335 && !mobile) ||
      (window.scrollY >= 670 && window.scrollY <= 2089 && mobile)
    ) {
      setNavTheme(NAV_DARK);
    } else if (
      (window.scrollY >= 1336 && !mobile) ||
      (window.scrollY >= 2300 && mobile)
    ) {
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
        <Route path={`/${BATTLECHESS}`}>
          <ProjectOverview
            desc={BATTLECHESS_DESC_LONG}
            img={BattleChess}
            link={BATTLECHESS_GITHUB_LINK}
          />
        </Route>
        <Route path={`/${PORTFOLIO}`}>
          <ProjectOverview
            desc={PORTFOLIO_DESC_LONG}
            img={Portfolio}
            link={PORTFOLIO_GITHUB_LINK}
          />
        </Route>
        <Route path={`/${SPOTIFY_TOOL}`}>
          <ProjectOverview
            demo={BATTLECHESS_GITHUB_LINK}
            desc={SPOTIFY_TOOL_DESC_LONG}
            img={Spotify_Tool}
            link={SPOTIFY_TOOL_GITHUB_LINK}
          />
        </Route>
        <Route path={`/${THISHUB}`}>
          <ProjectOverview
            demo={BATTLECHESS_GITHUB_LINK}
            desc={THISHUB_DESC_LONG}
            img={Thishub}
            link={THISHUB_GITHUB_LINK}
          />
        </Route>
      </Router>
    </NavTheme.Provider>
  );
};

export default App;
