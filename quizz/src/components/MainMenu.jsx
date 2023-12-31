import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css"

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext)
  return (
    <div className='Menu'>

      <button onClick={() => {
        setGameState("quiz")
      }}></button>
      
    </div>
  )
}

export default MainMenu
