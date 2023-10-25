import { useState, useEffect } from 'react'
import seedrandom from 'seedrandom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'


import data from './assets/data/data.json'


import { Card } from './assets/components/Card/card.jsx'
import { ChatPage } from './assets/pages/chat/chat'
import { Home } from './assets/pages/homepage/home.jsx'
import ScrollToTop from './assets/utils/scrollToTop.jsx';
import { Nav } from './assets/components/navbar/nav';
import { BottomNav } from './assets/components/navbar/bottomnav';

function App() {


  const [gamesData, setGamesData] = useState(data)

  const [selectedGame, setSGame] = useState({

    "game": null,
    "vip": null,
    "profit": null,
    "analyst": null,
    "onlinePlayers": null,
    "gameImage": null,
    "analystPfp": null,

  })

  function randomizeGamesData(gamesData, index) {



    const today = new Date();
    const day = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const fiveMinuteBlocks = Math.floor(minutes / 5);

    // Create a seed that combines the day, hour, and the current 5-minute block, and index
    const seed = `${day.toString()}${hours.toString()}${fiveMinuteBlocks.toString()}${index}`;

    const rng = seedrandom(seed);
    const randomFactor = rng();

    // Generate a random factor for deltaPlayers that varies between 0.1 and 0.4
    const deltaFactor = 0.1 + (0.4 - 0.1) * rng();

    const deltaPlayers = gamesData.onlinePlayers * deltaFactor;

    const randomizedPlayers = gamesData.onlinePlayers + Math.floor((deltaPlayers * 2 * randomFactor) - deltaPlayers);


    /* PROFIT NOT 100% */
    const deltaProfit = gamesData.profit * deltaFactor
    const randomizedProfit = gamesData.profit + Math.floor((deltaProfit * 2 * randomFactor) - deltaProfit);



    ;



    return { onlinePlayers: randomizedPlayers, profit: gamesData.profit };
  }

  useEffect(() => {
    const newGamesData = gamesData.map((gamesData, index) => {
      const { onlinePlayers, profit } = randomizeGamesData(gamesData, index);


      return {
        ...gamesData,
        onlinePlayers,
        profit
      };
    });

    console.log(newGamesData)
    setGamesData(newGamesData);
  }, []);

  return (
    <>

      <>

        <Router>
          <Nav />
          <BottomNav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home data={gamesData} selectedGame={selectedGame} setSGame={setSGame} />} />
            <Route path="/chat" element={<ChatPage
              game={selectedGame.game}
              analystPfp={selectedGame.analystPfp}
              analyst={selectedGame.analyst}
              profit={selectedGame.profit}
              onlinePlayers={selectedGame.onlinePlayers}
            />} />
          </Routes>
        </Router>
      </>


    </>
  )
}

export default App