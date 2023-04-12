import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import MainLayout from "./components/MainLayout";
import Home from "./components/Routing/Home/Home";
import About from "./components/Routing/About/About";
import AboutFilm from "./components/Routing/AboutFilm/AboutFilm";
import Films from "./components/Routing/Films/Films";
import NotFound from "./components/Routing/NotFound/NotFound";

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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
