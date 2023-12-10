export default function (state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
      };
    case "ADD_MOVIE_TO_FAVORITE":
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    case "REMOVE_MOVIE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
}
