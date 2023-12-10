import { createContext, useEffect, useReducer } from "react";
import  AppReducer  from "./AppReducer";

//initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) :[],
  favorite: localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) :[],
};

//create context
export const GlobalContext = createContext(initialState);

//global provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
    localStorage.setItem("favorite",JSON.stringify(state.favorite));
  }, [state])


  //action
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
  }

  const addMovieToFavorite = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITE", payload: movie });
  };

  const removeMovieFromFavorite = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITE", payload: id})
  }

  return <GlobalContext.Provider value={{ watchlist: state.watchlist, favorite: state.favorite, addMovieToWatchlist,removeMovieFromWatchlist,addMovieToFavorite,removeMovieFromFavorite }}>{props.children}</GlobalContext.Provider>;
};
