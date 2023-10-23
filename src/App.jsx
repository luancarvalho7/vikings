import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'


import data from './assets/data/data.json'


import { Card } from './assets/components/Card/card.jsx'
import { ChatPage } from './assets/pages/chat/chat'
import { Home } from './assets/pages/homepage/home.jsx'
import ScrollToTop from './assets/utils/scrollToTop.jsx';

function App() {

  
  const [gamesData, setGamesData] = useState(data) //ChatGPT, do your magic here

  const [selectedGame, setSGame] = useState({ //Chatgpt, dont touch here

    "game": null,
    "vip": null,
    "profit": null,
    "analyst": null,
    "onlinePlayers": null,
    "gameImage": null,
    "analystPfp": null,

}) 


  return (
    <>

      <>


        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home data={data} selectedGame={selectedGame} setSGame={setSGame}/>} />
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