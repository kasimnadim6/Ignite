import axios from 'axios';
import { popularGamesURL, upcommingGamesURL, newGamesURL, getSearchedGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
  const popular = await axios.get(popularGamesURL());
  const upcoming = await axios.get(upcommingGamesURL());
  const newGames = await axios.get(newGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popular.data.results,
      upcoming: upcoming.data.results,
      newGames: newGames.data.results,
    },
  });
};

export const fetchSearchedGames = (searchText) => async (dispatch) => {
  const searchedGames = await axios.get(getSearchedGamesURL());
  dispatch({
    type: 'FETCH_SEARCHED_GAMES',
    payload: {
      searchedGames: searchedGames.data.results,
    },
  });
};
