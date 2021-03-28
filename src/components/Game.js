import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  return (
    <StyledGame>
      <h2>{name}</h2>
      <p>{released}</p>
      <img src={image} alt={name}></img>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  box-shadow: 0rem 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
