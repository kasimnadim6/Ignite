const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searchedGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case 'FETCH_SEARCHED_GAMES':
      return {
        ...state,
        searchedGames: action.payload.searchedGames,
      };
    case 'CLEAR_SEARCHED_GAMES':
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
