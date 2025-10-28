import List from './pages/List.js';
import Pemonlist from './pages/Pemonlist.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/pemonlist', component: Pemonlist },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
