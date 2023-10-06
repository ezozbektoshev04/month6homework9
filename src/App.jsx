import React from "react";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoadinComp from "./components/LoadinComp";

// import Header from "./components/Header";
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./components/Home"));
const Business = React.lazy(() => import("./components/Business"));
const Sports = React.lazy(() => import("./components/Sports"));
const Entertainment = React.lazy(() => import("./components/Entertainment"));
const Science = React.lazy(() => import("./components/Science"));
const Health = React.lazy(() => import("./components/Health"));
const General = React.lazy(() => import("./components/General"));
const Technology = React.lazy(() => import("./components/Technology"));
const Details = React.lazy(() => import("./components/Details"));
// import Home from "./components/Home";
// import Business from "./components/Business";
// import Sports from "./components/Sports";
// import Entertainment from "./components/Entertainment";
// import General from "./components/General";
// import Science from "./components/Science";
// import Health from "./components/Health";
// import Technology from "./components/Technology";
// import Details from "./components/Details";

function App() {
  return (
    <div>
      <Rourter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Home />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/business"
            element={
              <React.Suspense>
                <Business />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Sports />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Entertainment />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/general"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <General />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/health"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Health />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/science"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Science />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Technology />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/details"
            element={
              <React.Suspense fallback={<LoadinComp />}>
                <Details />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </Rourter>
    </div>
  );
}

export default App;
