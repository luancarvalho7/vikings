import { useState } from 'react'
import { Card } from './assets/components/Card/card.jsx'
import './App.css'
import { ChatPage } from './assets/pages/chat/chat'
import { Home } from './assets/pages/homepage/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Home/>
    
{/*       <ChatPage
        game="NinjaCrash"
        userPfp="https://i.postimg.cc/brJDBW51/icon-Analist.png"
        userName="Vincin do Roi"
        profit={999999}
        onlinePlayers={999}
      /> */}
    </>
  )
}

export default App
