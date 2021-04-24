import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { fetchSearchedGames } from '../actions/gamesAction';
import { fadeIn } from '../animation';

const Nav = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const searchTextChangeHandler = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedGames(searchText));
    setSearchText('');
  };
  const clearSearchHandler = (e) => {
    dispatch({ type: 'CLEAR_SEARCHED_GAMES' });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form>
        <input value={searchText} onChange={searchTextChangeHandler} type="text" />
        <button type="submit" onClick={searchHandler}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    border: none;
    padding: 0.6rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;
