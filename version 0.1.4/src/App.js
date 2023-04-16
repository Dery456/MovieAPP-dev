import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import { useContext } from "react";
import { useState } from "react";
import TestContext from "./context/TestContext";

import MainLayout from "./components/MainLayout";
import Home from "./components/Routing/Home/Home";
import About from "./components/Routing/About/About";
import AboutFilm from "./components/Routing/AboutFilm/AboutFilm";
import Films from "./components/Routing/Films/Films";
import NotFound from "./components/Routing/NotFound/NotFound";
import FilmsLayout from "./components/Routing/FilmsLayout/FilmsLayout";
import Search from "./components/Routing/Search/Search";

function App() {
  const [user, setUser] = useState("Milion");
  return (
    <TestContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="MovieAPP/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path=":slug" element={<FilmsLayout />} />
            <Route path="search" element={<Search />} />
            <Route path="about" element={<About />} />
            <Route path="films" element={<Films />} />
            <Route path="films/:kinopoiskId" element={<AboutFilm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </TestContext.Provider>
  );
}

export default App;
