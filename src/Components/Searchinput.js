import React, { useState, useEffect } from "react";
import { Apimovie } from "../Apimovie";
import { Swiper } from "swiper/react";
import LoadingCard from "./LoadingCard";
import Cardlist from "./Cardlist";
import { SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

const SearchInput = () => {
  const [inputsearch, setInputsearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setInputsearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(inputsearch);

    setLoading(true);

    Apimovie(`https://api.themoviedb.org/3/search/movie?query=${inputsearch}&include_adult=false&language=en-US&page=1`)
      .then((response) => {
        setSearchResults(response.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    setInputsearch("");
  };

  useEffect(() => {}, [inputsearch]);

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="flex items-center justify-center">
        <input type="text" placeholder="Search Movie..." value={inputsearch} onChange={handleSearchChange} className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        <button type="submit" className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Search
        </button>
      </form>

      <div className="mb-4 ">
        <h1 className="md:text-4xl font-bold  text-white md:mb-5 text-2xl my-5">Your Search:</h1>

        {loading ? (
          <LoadingCard />
        ) : (
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {searchResults.map((movie) => (
              <SwiperSlide key={movie.id} className="max-w-xs mr-4 relative">
                <Cardlist movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
