import React from "react";
import { Button } from "./Button";

export function Picked(props) {

  const [result, setResult] = React.useState("");
  const [isHide, setIsHide] = React.useState(true);

  // console.log('picked')

  let houseChoiceName;
  switch (props.houseChoice) {
    case 1:
      houseChoiceName = "rock";
      break;
    case 2:
      houseChoiceName = "paper";
      break;
    case 3:
      houseChoiceName = "scissors";
      break;
    default:
      break;
  }

  React.useEffect(() => {
    console.log(isHide)
    if (!isHide) {
      if (props.choice === "rock") {
        if (houseChoiceName === "rock") {
          setResult("DRAW");
        } else if (houseChoiceName === "paper") {
          setResult("YOU LOSE");
        } else {
          setResult("YOU WIN");
          props.setScore(prev => prev + 1);
        }
      } else if (props.choice === "paper") {
        if (houseChoiceName === "paper") {
          setResult("DRAW");
        } else if (houseChoiceName === "scissors") {
          setResult("YOU LOSE");
        } else {
          setResult("YOU WIN");
          props.setScore(prev => prev + 1);
        }
      } else if (props.choice === "scissors") {
        if (houseChoiceName === "scissors") {
          setResult("DRAW");
        } else if (houseChoiceName === "rock") {
          setResult("YOU LOSE");
        } else {
          setResult("YOU WIN");
          props.setScore(prev => prev + 1);
        }
      }
    }
  }, [isHide])

  let styles;
  if (result === "YOU WIN") { styles = { color: "#3FE0AD" } }
  if (result === "YOU LOSE") { styles = { color: "#E0655E" } }

  setTimeout(() => setIsHide(false), 1000);

  return (
    <div className="picked" style={{ gridTemplateColumns: !isHide ? "1fr 1fr 1fr" : "1fr 100px 1fr" }}>
      <div className="picked__block">
        <h2 className="picked__title">YOU PICKED</h2>
        <div style={{ position: "relative" }}>
          <Button name={props.choice} />
          {result === "YOU WIN" && <div style={{ position: "absolute", top: "0", width: "200px", height: "200px", borderRadius: "50%", boxShadow: "0 0 60px #3FE0AD", zIndex: "-1" }} />}
        </div>
      </div>

      {!isHide ? <div>
        <div className="picked__result" style={styles}>
          {result}
        </div>
        <button
          className="picked__button"
          onClick={() => props.setStep(1)}
        >PLAY AGAIN</button>
      </div> : null}

      <div className="picked__block">
        <h2 className="picked__title">THE HOUSE PICKED</h2>
        {!isHide ?
          <div style={{ position: "relative" }}>
            <Button name={houseChoiceName} result={result} />
            {result === "YOU LOSE" && <div style={{ position: "absolute", top: "0", width: "200px", height: "200px", borderRadius: "50%", boxShadow: "0 0 60px #E0655E", zIndex: "-1" }} />}
          </div>
          : <div className="picked__circle"></div>}
      </div>
    </div>
  )
}