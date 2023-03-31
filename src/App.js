import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import CaruselBox from "./components/caruselBox/CaruselBox";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import PromiseDe from "./components/PromiseDe.jsx";
import MainLayout from "./components/MainLayout";
import Home from "./components/Routing/Home";
import About from "./components/Routing/About";
import AboutFilm from "./components/Routing/AboutFilm";
import Films from "./components/Routing/Films";
import NotFound from "./components/Routing/NotFound";
import TestFilter from "./components/TestFilter";

function App() {
  return (
    <BrowserRouter>
      {
        //<Header />
      }
      <div className="App">
        <Routes>
          <Route path="MovieAPP/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="films" element={<Films />} />
            <Route path="films/:kinopoiskId" element={<AboutFilm />} />
            <Route path="testFilter" element={<TestFilter />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
