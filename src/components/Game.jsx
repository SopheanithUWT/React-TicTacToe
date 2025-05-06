import React from 'react'
import './Game.css'
//import oIcon from '../assets/circle.png';
//import xIcon from '../assets/cross.png';

const Game = () => {
  return (
    <div className='container'>
        <h1 className='title'>TicTacToe Game</h1>
        <div className='board'>

        </div>
        <button className='reset'>Reset Game</button>
    </div>
  )
}

export default Game;