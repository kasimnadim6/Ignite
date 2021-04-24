const base_url = 'https://api.rawg.io/api';
const API_KEY = 'd8f3370ff2154eacbf28b139e08f341e';
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
const currentDay = ('0' + date.getDate()).slice(-2);
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}/${popular_games}`;
export const upcommingGamesURL = () => `${base_url}/${upcomming_games}`;
export const newGamesURL = () => `${base_url}/${new_games}`;
export const getGameDetailsByIdURL = (id) => `${base_url}/games/${id}?key=${API_KEY}`;
export const getGameScreenshotsURL = (id) => `${base_url}/games/${id}/screenshots?key=${API_KEY}`;
export const getSearchedGamesURL = (searchText) => `${base_url}/games?key=${API_KEY}&search=${searchText}&page_size=9`;
