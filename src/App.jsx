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
    const month = today.getMonth()
    const day = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const fiveMinuteBlocks = Math.floor(minutes / 5);

    const checkIsOpen = () => {
      if (gamesData.vip) {
        return true
      } else {
        if (hours < 21 && hours > 9) {
          return true
        }
        else {
          return false
        }
      }
    }
    const isOpen = checkIsOpen()

    // Create a seed that combines the day, hour, and the current 5-minute block, and index
    const seed = `${month.toString()}${day.toString()}${hours.toString()}${fiveMinuteBlocks.toString()}${index}`;

    const rng = seedrandom(seed);
    const randomFactor = rng();

    // Generate a random factor for deltaPlayers that varies between 0.1 and 0.4
    const deltaFactor = 0.1 + (0.4 - 0.1) * rng();
    const deltaPlayers = gamesData.onlinePlayers * deltaFactor;

    //Randomize Players When OPEN && 0 when closed
    const getRandomizedPlayers = () => {
      if (isOpen) {
        return gamesData.onlinePlayers + Math.floor((deltaPlayers * 2 * randomFactor) - deltaPlayers);
      } else {
        return 0
      }
    };

    const randomizedPlayers = getRandomizedPlayers();

    /* PROFIT NOT 100% */

    const profitSeed = `${month.toString()}${day.toString()}${index}`;

    const profitRng = seedrandom(profitSeed);
    const randomProfitFactor = profitRng();

    const deltaProfitFactor = 0.1 + (0.4 - 0.1) * profitRng();
    const deltaProfit = gamesData.profit * deltaProfitFactor

    const randomizedProfit = gamesData.profit + Math.floor((deltaProfit * 2 * randomProfitFactor) - deltaProfit);

    console.log(randomizedProfit)






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