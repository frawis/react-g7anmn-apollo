import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import Kurse from "./Kurse";
import News from "./News";
import FramerTest from "./FramerTest";
import KursDetails from "./KursDetails";
import Post from "./components/Post";

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <div className="border-b border-b-gray-300 fixed top-0 right-0 left-0 w-full z-50 bg-white">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
            <nav className="flex space-x-2 h-12 items-center">
              <div>
                <Link to="/news">News</Link>
              </div>
              <div>
                <Link to="/kurse">Kurse</Link>
              </div>
              <div>
                <Link to="/post">Beitrag</Link>
              </div>
              <div>
                <Link to="/animation">Animation</Link>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <main className="mt-16">
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/animation" exact>
              <FramerTest />
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
          </main>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
