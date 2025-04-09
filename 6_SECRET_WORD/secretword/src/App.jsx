//css
import "./App.css"

//react
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from "./data/words";

//componets
import StartScreen from './componets/StartScreen'
import Game from "./componets/Game";
import GameOver from "./componets/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameState] = useState(stages[0].name)
  const [words] = useState(wordsList)

  //starts the secret word game
  const startGame = () => {
    setGameState(stages[1].name)
  }

  //process the letter input
  const verifyLetter =() => {
    setGameState(stages[2].name)
  }

  //restarts the game
  const retry =() => {
    setGameState(stages[0].name)
  }

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
        {gameStage === 'end' && <GameOver retry={retry} />}
      </div>
    </>
  )
}

export default App
