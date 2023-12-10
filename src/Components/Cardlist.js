import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { GlobalContext } from "../Context/Globalstate";
import { useContext } from "react";

const Cardlist = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, addMovieToFavorite ,favorite } = useContext(GlobalContext);

  const cekBookmarkMovies = watchlist.find((check) => check.id === movie.id);
  const cekFavoriteMovies = favorite.find((check) => check.id === movie.id);

  return (
    <div className="bg-[#050E12] rounded-md p-4 shadow-md group">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[500px] h-40 object-cover mb-2 rounded-md" />
      <h2 className="text-lg font-bold mb-2 text-white">{movie.title}</h2>
      <p className="text-gray-500 mt-2">{movie.release_date.substring(0, 4)}</p>
      <div className="icons    flex absolute bottom-20 right-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {cekBookmarkMovies ? <FaBookmark className="text-white font-bold text-2xl" /> : <CiBookmark className="text-white font-bold text-2xl" onClick={() => addMovieToWatchlist(movie)} style={{ cursor: "pointer" }} />}
        {cekFavoriteMovies ? <MdFavorite className="text-white font-bold text-2xl" /> : <MdFavoriteBorder className="text-white font-bold text-2xl" onClick={() => addMovieToFavorite(movie)} style={{ cursor: "pointer" }} />}
      </div>
    </div>
  );
};

export default Cardlist;
