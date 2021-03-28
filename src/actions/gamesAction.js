import axios from "axios";
import { popularGamesURL, upcommingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popular = await axios.get(popularGamesURL());
  const upcoming = await axios.get(upcommingGamesURL());
  const newGames = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popular.data.results,
      upcoming: upcoming.data.results,
      newGames: newGames.data.results,
    },
  });
};
