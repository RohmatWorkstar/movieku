import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { GlobalContext } from "../Context/Globalstate";

const Watchlist = () => {
  const { watchlist, removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist min-h-screen bg-black container mx-auto px-32 pt-10">
      <h1 className="text-4xl font-bold mb-5 text-white">Watchlist</h1>

      {watchlist.length > 0 ? (
        <div className="grid sm:grid-cols-2  md:grid-cols-4  gap-4 items-center justify-center">
          {watchlist.map((movie) => (
            <div key={movie.id} className="">
              <div to={`/detailmovies/${movie.id}`}>
                <div className="bg-[#050E12] rounded-md p-4 shadow-md relative">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-50 object-cover mb-2 rounded-md" />
                  <h2 className="text-lg font-bold mb-2 text-white">{movie.title}</h2>
                  <p className="text-gray-500 mt-2">{movie.release_date.substring(0, 4)}</p>
                  <FaBookmark className="text-white absolute right-5 bottom-24" onClick={() => removeMovieFromWatchlist(movie.id)} style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-4xl font-bold mb-5 text-white text-center">No List Of Movies Added Yet !!!</h1>
      )}
    </div>
  );
};

export default Watchlist;
