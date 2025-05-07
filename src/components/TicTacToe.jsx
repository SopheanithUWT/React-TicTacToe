import React, { useState, useRef } from "react";
import "./TikTacToe.css";
import oIcon from "../assets/circle.png";
import xIcon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TikTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [winLine, setWinLine] = useState(null);
  let titleRef = useRef(null);
  let boardRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${xIcon}' alt="X">`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${oIcon}' alt="O">`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    // Horizontal wins
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      setWinLine("win-line win-line-row-0");
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      setWinLine("win-line win-line-row-1");
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      setWinLine("win-line win-line-row-2");
      won(data[8]);
    }
    // Vertical wins
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      setWinLine("win-line win-line-col-0");
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      setWinLine("win-line win-line-col-1");
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      setWinLine("win-line win-line-col-2");
      won(data[8]);
    }
    // Diagonal wins
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      setWinLine("win-line win-line-diag-1");
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      setWinLine("win-line win-line-diag-2");
      won(data[6]);
    }
    // Check for draw
    else if (!data.includes("")) {
      titleRef.current.innerHTML = "It's a Draw!";
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulation: <img src='${xIcon}' alt="X">`;
    } else {
      titleRef.current.innerHTML = `Congratulation: <img src='${oIcon}' alt="O">`;
    }
  };

  const reset = () => {
    setLock(false);
    setWinLine(null);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "TicTacToe Game";

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });

    setCount(0);
  };

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>TicTacToe Game</h1>
            <div className='board' ref={boardRef}>
                <div className='row1'>
                    <div className='boxes' onClick={(e) => {toggle(e,0)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,1)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,2)}}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e) => {toggle(e,3)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,4)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,5)}}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e) => {toggle(e,6)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,7)}}></div>
                    <div className='boxes' onClick={(e) => {toggle(e,8)}}></div>
                </div>
                {winLine && <div className={winLine}></div>}
            </div>
            <button className='reset' onClick={() => reset()}>Reset Game</button>
        </div>
    );
};

export default TikTacToe;
