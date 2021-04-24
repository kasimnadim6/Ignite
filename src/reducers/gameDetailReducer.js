const initialState = { game: { platforms: [] }, screenshots: [], isLoading: true };

const gameDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAME_DETAIL_BY_ID':
      return {
        ...state,
        game: action.payload.gameDetail,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailReducer;
