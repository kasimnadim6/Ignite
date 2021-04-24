import axios from 'axios';
import { getGameDetailsByIdURL, getGameScreenshotsURL } from '../api';

export const getGameDetails = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });
  const gameDetail = await axios.get(getGameDetailsByIdURL(id));
  const gameScreenshots = await axios.get(getGameScreenshotsURL(id));
  dispatch({
    type: 'FETCH_GAME_DETAIL_BY_ID',
    payload: {
      gameDetail: gameDetail.data,
      screenshots: gameScreenshots.data.results,
    },
  });
};
