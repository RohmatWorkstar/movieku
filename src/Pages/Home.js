import React, { useEffect, useState } from "react";
import "react-indiana-drag-scroll/dist/style.css";
import { Apimovie } from "../Apimovie";
import { Link } from "react-router-dom";
import Cardlist from "../Components/Cardlist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import LoadingCard from "../Components/LoadingCard";
import Searchinput from "../Components/Searchinput";

const Home = () => {
  const [Nowplaying, setNowplaying] = useState([]);
  const [Toprated, setToprated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Apimovie("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1")
      .then((response) => {
        // console.log("Now Playing:", response.results);
        setNowplaying(response.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    Apimovie("https://api.themoviedb.org/3/movie/top_rated")
      .then((response) => {
        // console.log("Top rated:", response.results);
        setToprated(response.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto p-4 md:px-16 lg:px-32">
        <div className="Search">
          <h1 className="md:text-4xl font-bold  text-white mb-5 text-center text-2xl">Lets Search Your Movie</h1>
          <Searchinput />
        </div>
        <div className="now-playing mb-4 ">
          <h1 className="md:text-4xl font-bold  text-white md:mb-5 text-2xl my-5">Now Playing</h1>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {Nowplaying.map((movie) => (
              <SwiperSlide key={movie.id} className="max-w-xs mr-4 relative">
                {loading ? <LoadingCard /> : <Cardlist movie={movie} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="top-rated">
          <h1 className="md:text-4xl font-bold  text-white text-2xl mb-5">Top Rated</h1>
          {loading ? (
            <LoadingCard />
          ) : (
            <div className="grid sm:grid-cols-2  md:grid-cols-4  gap-4 items-center justify-center">
              {Toprated.map((movie) => (
                <div key={movie.id} className="">
                  <Link to={`/detailmovies/${movie.id}`}>
                    <div className="bg-[#050E12] rounded-md p-4 shadow-md">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-50 object-cover mb-2 rounded-md" />
                      <h2 className="text-lg font-bold mb-2 text-white">{movie.title}</h2>
                      <p className="text-gray-500 mt-2">{movie.release_date.substring(0, 4)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
