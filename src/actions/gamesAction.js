import axios from "axios";
import { popularGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const response = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: response.data.results,
    },
  });
};
