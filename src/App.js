import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import Block from "./renderProp/Block";
import Friday from "./renderProp/Friday";
import WeekDays from "./renderProp/WeekDays";
import ForHOC from "./components/forHOC/СontainerForHOC";
import HooksRouter from "./components/forHooks/HooksRouter";
import getSomeData from './hooks/customHook';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
};

export const ThemeContext = React.createContext(themes.light);

const someData = getSomeData();
console.log(someData);



function App() {
  
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/renderProp">About renderProp</Link>
              </li>
              <li>
                <Link to="/HOC">High order components</Link>
              </li>
              <li>
                <Link to="/hooks">Hooks</Link>
              </li>
            </ul>

            <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <div>
                    <h1>Welcome! For a demo, click on the link above!</h1>
                  </div>
                </Route>
                <Route path="/renderProp">
                  <Block
                    render={(day) => {
                      if (day === "Friday") {
                        return <Friday />;
                      } else {
                        return <WeekDays />;
                      }
                    }}
                  />
                </Route>
                <Route path="/HOC">
                  <ForHOC />
                </Route>
                <Route path="/hooks">
                  <HooksRouter />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
