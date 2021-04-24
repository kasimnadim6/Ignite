import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getGameDetails } from '../actions/gameDetailActions';
import { smallImage } from '../util';

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const getGameDetailsByIdHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(getGameDetails(id));
  };
  return (
    <StyledGame layoutId={id} onClick={getGameDetailsByIdHandler}>
      <Link to={`games/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${id}`} src={smallImage(image, 640)} alt={name}></motion.img>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  width: 100%;
  min-height: 30vh;
  text-align: center;
  box-shadow: 0rem 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Game;
