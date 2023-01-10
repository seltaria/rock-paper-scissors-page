import React from "react";
import { useSelector } from "react-redux";

export function Header(props) {
  const score = useSelector((state) => state.score);

  return (
    <div className="header">
      <h1 className="header__title">
        ROCK<br />PAPER<br />SCISSORS
      </h1>
      <div className="header__score">
        <span className="header__score-text">
          SCORE
        </span>
        <span className="header__score-count">
          {/* {props.score} */}
          {score}
        </span>
      </div>
    </div>
  )
}