import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Watchlist from "./Pages/Watchlist";
import Favorite from "./Pages/Favorite";
import Detailmovie from "./Pages/Detailmovie";
import { GlobalProvider } from "./Context/Globalstate";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-slate-300-800 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detailmovies/:movieId" element={<Detailmovie />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
};

export default App;
