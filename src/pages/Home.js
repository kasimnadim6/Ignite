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
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
          ></Game>
        ))}
      </Games>
      <h2>Popular Games</h2>
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
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
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
  padding: 0 3rem;
  h2 {
    margin: 0 0 5rem 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-image: linear-gradient(to right, #1f3d82, #099137);
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    &:not(:first-child) {
      margin-top: 5rem;
    }
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
