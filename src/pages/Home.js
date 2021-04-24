import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import { useLocation } from 'react-router-dom';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//Styles and Animations
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animation';

const Home = () => {
  const { pathname } = useLocation();
  const pathId = pathname.split('/')[2];
  const dispatch = useDispatch();
  //dispatch action
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get data from store
  const { popular, upcoming, newGames, searchedGames } = useSelector((store) => store.games);
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        {searchedGames.length ? (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searchedGames.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  id={game.id}
                ></Game>
              ))}
            </Games>
          </>
        ) : (
          ''
        )}

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
      </AnimateSharedLayout>
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
`;

export default Home;
