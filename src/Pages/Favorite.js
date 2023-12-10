import React, { useContext } from "react";
import { MdFavorite } from "react-icons/md";
import { GlobalContext } from "../Context/Globalstate";

const Favorite = () => {
  const { favorite, removeMovieFromFavorite } = useContext(GlobalContext);

  return (
    <div className="watchlist min-h-screen bg-black container mx-auto px-32 pt-10">
      <h1 className="md:text-4xl md:text-left text-3xl text-center font-bold mb-5 text-white">Favorite</h1>

      {favorite.length > 0 ? (
        <div className="grid sm:grid-cols-2  md:grid-cols-4  gap-4 items-center justify-center">
          {favorite.map((favorite) => (
            <div key={favorite.id} className="">
              <div to={`/detailmovies/${favorite.id}`}>
                <div className="bg-[#050E12] rounded-md p-4 shadow-md relative">
                  <img src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`} alt={favorite.title} className="w-full h-50 object-cover mb-2 rounded-md" />
                  <h2 className="text-lg font-bold mb-2 text-white">{favorite.title}</h2>
                  <p className="text-gray-500 mt-2">{favorite.release_date.substring(0, 4)}</p>
                  <MdFavorite className="text-white absolute right-5 bottom-24" onClick={() => removeMovieFromFavorite(favorite.id)} style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="md:text-4xl font-bold mb-5 text-white text-center text-2xl">No List Of Favorite Movies Added !!!</h1>
      )}
    </div>
  );
};

export default Favorite;
