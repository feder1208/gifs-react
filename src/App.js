import React from "react";
import "./App.css";
import { Route, Link } from "wouter";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          <a href="/">App</a>
        </h1>
        {/* <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/logo.png" />
        </Link> */}
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
