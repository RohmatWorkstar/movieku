import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { GlobalContext } from "../Context/Globalstate";

const DetailCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, addMovieToFavorite, favorite } = useContext(GlobalContext);

  const cekBookmarkMovies = watchlist.find((check) => check.id === movie.id);
  const cekFavoriteMovies = favorite.find((check) => check.id === movie.id);

  const releaseYear = movie ? new Date(movie.release_date).getFullYear() : null;

  return (
    <div className="md:w-[800px] md:h-[299px] md:absolute md:top-[50px] md:left-[125px]">
      <div className="md:flex gap-10">
        <div className="image h-[299px] md:w-full z-10 rounded-md overflow-hidden hidden md:block">
          <img className="md:w-full md:h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.original_title} />
        </div>

        <div className="information text-white p-10 md:p-0">
          <h1 className="md:text-4xl font-bold md:my-2 text-xl">
            {movie?.original_title} ({releaseYear})
          </h1>
          <h2 className="flex items-center gap-2 my-2 text-sm md:text-base">
            <span>{movie?.release_date}</span>
            <span className="flex gap-1">
              {movie?.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </span>
            <span>{`(${Math.floor(movie?.runtime / 60)} h ${movie?.runtime % 60} m)`}</span>
          </h2>
          <div className="flex my-2">
            {cekBookmarkMovies ? <FaBookmark className="text-white font-bold text-2xl" /> : <CiBookmark className="text-white font-bold text-2xl" onClick={() => addMovieToWatchlist(movie)} style={{ cursor: "pointer" }} />}
            {cekFavoriteMovies ? <MdFavorite className="text-white font-bold text-2xl" /> : <MdFavoriteBorder className="text-white font-bold text-2xl" onClick={() => addMovieToFavorite(movie)} style={{ cursor: "pointer" }} />}
          </div>
          <p className="my-2">{movie?.tagline}</p>
          <h1 className="text-xl font-semibold">Overview</h1>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
