import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import Kurse from "./Kurse";
import KursDetails from "./KursDetails";
import Post from "./components/Post";

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <nav className="flex space-x-2">
          <div>
            <Link to="/news">News</Link>
          </div>
          <div>
            <Link to="/kurse">Kurse</Link>
          </div>
          <div>
            <Link to="/post">Beitrag</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/kurse" exact>
            <Kurse />
          </Route>
          <Route path="/kurse/:id" exact>
            <KursDetails />
          </Route>
          <Route path="/post" exact>
            <Post />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
