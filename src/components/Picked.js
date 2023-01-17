import React from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { Button } from "./Button";

export function Picked(props) {

  const [result, setResult] = React.useState("");
  const [isHide, setIsHide] = React.useState(true);

  const dispatch = useDispatch();

  const addScore = () => {
    dispatch({
      type: "ADD_SCORE"
    })
  }


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
    case 4:
      houseChoiceName = "lizard";
      break;
    case 5:
      houseChoiceName = "spock";
      break;
    default:
      break;
  }

  React.useEffect(() => {
    if (!isHide) {
      if (props.choice === "rock") {
        if (houseChoiceName === "rock") {
          setResult("DRAW");
        } else if (houseChoiceName === "paper") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "lizard") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "scissors") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "spock") {
          setResult("YOU LOSE");
        }

      } else if (props.choice === "paper") {
        if (houseChoiceName === "paper") {
          setResult("DRAW");
        } else if (houseChoiceName === "scissors") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "rock") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "lizard") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "spock") {
          setResult("YOU LOSE")
        }

      } else if (props.choice === "scissors") {
        if (houseChoiceName === "scissors") {
          setResult("DRAW");
        } else if (houseChoiceName === "rock") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "paper") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "lizard") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "spock") {
          setResult("YOU LOSE")
        }

      } else if (props.choice === "lizard") {
        if (houseChoiceName === "lizard") {
          setResult("DRAW");
        } else if (houseChoiceName === "rock") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "paper") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "scissors") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "spock") {
          setResult("YOU WIN");
          addScore();
        }

      } else if (props.choice === "spock") {
        if (houseChoiceName === "spock") {
          setResult("DRAW");
        } else if (houseChoiceName === "rock") {
          setResult("YOU WIN");
          addScore();
        } else if (houseChoiceName === "paper") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "lizard") {
          setResult("YOU LOSE");
        } else if (houseChoiceName === "scissors") {
          setResult("YOU WIN");
          addScore();
        }
      }
    }
  }, [isHide])

  let styles;
  if (result === "YOU WIN") { styles = { color: "#3FE0AD" } }
  if (result === "YOU LOSE") { styles = { color: "#E0655E" } }

  const userChoiceProps = useSpring({ from: { opacity: 0, x: -20 }, to: { opacity: 1, x: 0 } });
  const houseChoiceProps = useSpring({ from: { opacity: 0, x: 20 }, to: { opacity: 1, x: 0 }, delay: 1000 });
  const btnProps = useSpring({ from: { opacity: 0, y: -20 }, to: { opacity: 1, y: 0 }, delay: 1100 });

  setTimeout(() => setIsHide(false), 1000);

  return (
    // <div className="picked" style={{ gridTemplateColumns: !isHide ? "1fr 1fr 1fr" : "1fr 100px 1fr" }}>
    <div className="picked">
      <div className="picked__block">
        <h2 className="picked__title">YOU PICKED</h2>
        <animated.div style={userChoiceProps}>
          <Button name={props.choice} />
          {/* {result === "YOU WIN" && <div style={{ position: "absolute", top: "0", width: "200px", height: "200px", borderRadius: "50%", boxShadow: "0 0 60px #3FE0AD", zIndex: "-1" }} />} */}
        </animated.div>
      </div>

      {
        !isHide ? <animated.div style={btnProps}>
          <div className="picked__result" style={styles}>
            {result}
          </div>
          <button
            className="picked__button"
            onClick={() => props.setStep(1)}
          >PLAY AGAIN</button>
        </animated.div> : null
      }

      <div className="picked__block">
        <h2 className="picked__title">THE HOUSE PICKED</h2>
        {!isHide ?
          <animated.div style={houseChoiceProps}>
            <Button name={houseChoiceName} result={result} mode={props.mode} />
            {/* {result === "YOU LOSE" && <div style={{ position: "absolute", top: "0", width: "200px", height: "200px", borderRadius: "50%", boxShadow: "0 0 60px #E0655E", zIndex: "-1" }} />} */}
          </animated.div>
          : <div className="picked__circle"></div>}
      </div>
    </div >
  )
}