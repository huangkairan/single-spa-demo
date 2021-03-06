import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Root(props) {
  // return (
  //   <div>
  //     <section>{props.name} is mounted!</section>
  //     <div>React子应用</div>
  //   </div>
  // );
  return (
    <BrowserRouter basename="/todos">
      <div>{props.name}</div>
      <div>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
