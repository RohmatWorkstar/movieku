import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Apimovie } from "../Apimovie";
import DetailCard from "../Components/DetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import LoadingCard from "../Components/LoadingCard";

const Detailmovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      console.error("Invalid movieId:", movieId);
      return;
    }

    // Mengambil detail film
    Apimovie(`https://api.themoviedb.org/3/movie/${movieId}`)
      .then((response) => {
        console.log("Movie Detail:", response);
        setMovie(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // Mengambil rekomendasi film
    Apimovie(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`)
      .then((response) => {
        console.log("Recommendations:", response);
        setRecommendations(response.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div className="min-h-screen bg-black">
      <div
        className="detail-movie h-[400px] w-full bg-cover bg-center  relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        }}
      >
        {loading ? <LoadingCard /> : <DetailCard movie={movie} />}
      </div>
      <div className="recommend px-14">
        <h1 className="text-4xl font-bold  text-white my-8">Recommend Movie</h1>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {recommendations?.map((movie) => (
            <SwiperSlide key={movie.id} className="max-w-xs mr-4">
              {loading ? (
                <LoadingCard />
              ) : (
                <Link to={`/detailmovies/${movie.id}`} className="bg-[#050E12] rounded-md  shadow-md">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[500px] h-40 object-cover mb-2 rounded-md" />
                  <h2 className="text-lg font-bold mb-2 text-white">{movie.title}</h2>
                  <p className="text-gray-500 mt-2">{movie.release_date.substring(0, 4)}</p>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Detailmovie;
