const initialState = { game: {}, screenshots: {} };

const gameDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAIL_BY_ID":
      return {
        ...state,
        game: action.payload.gameDetail,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default gameDetailReducer;
