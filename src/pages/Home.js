import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  //dispatch action
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get data from store
  const { popular, upcoming, newGames } = useSelector((store) => store.games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
          ></Game>
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 1rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
`;

export default Home;
