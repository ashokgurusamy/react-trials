import React from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";
import LifeCycle from "./LifeCycle/LifeCycle";
import HigherOrderComponents from "./HigherOrderComp/HighOrderComp";
import Counter from "./Counter/Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header> </Header>
      <Footer></Footer> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Header">Header</Link>
            </li>
            <li>
              <Link to="/Body">Body</Link>
            </li>
            <li>
              <Link to="/Footer">Footer</Link>
            </li>
            <li>
              <Link to="/LifeCycle">React LifeCycle</Link>
            </li>
            <li>
              <Link to="/HigherOrderComponents">Higher Order Components</Link>
            </li>
            <li>
              <Link to="/Counter">Counter Experiment</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Header">
            <Header />
          </Route>
          <Route path="/Body">
            <Body />
          </Route>
          <Route path="/Footer">
            <Footer />
          </Route>
          <Route path="/LifeCycle">
            <LifeCycle />
          </Route>
          <Route path="/HigherOrderComponents">
            <HigherOrderComponents />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
