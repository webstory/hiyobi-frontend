import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import "./spinner.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Main = lazy(() => import("./router/Main"));
const GalleryInfo = lazy(() => import("./router/GalleryInfo"));
const Reader = lazy(() => import("./router/Reader"));
const Search = lazy(() => import("./router/Search"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={Main} />
          <Route exact path="/list/:paging" component={Main} />
          <Route exact path="/info/:gallid" component={GalleryInfo} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/:searchstr" component={Main} />
          <Route exact path="/search/:searchstr/:paging" component={Main} />

          <Route exact path="/reader/:readid" component={Reader} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
