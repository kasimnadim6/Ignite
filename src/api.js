const base_url = "https://api.rawg.io/api";
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = ("0" + (date.getMonth() + 1)).slice(-2);
const currentDay = ("0" + date.getDate()).slice(-2);
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}/${popular_games}`;
export const upcommingGamesURL = () => `${base_url}/${upcomming_games}`;
export const newGamesURL = () => `${base_url}/${new_games}`;
