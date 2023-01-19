import React from "react";
import { LizardIcon, PaperIcon, RockIcon, ScissorsIcon, SpockIcon } from "./BtnIcons";

export function Button(props) {

  let styles = {};
  switch (props.name) {
    case "rock":
      styles = { background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))", boxShadow: "0px 7px 0px #AE3050" };
      break;
    case "paper":
      styles = { background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))", boxShadow: "0px 7px 0px rgb(56, 31, 195)" };
      break;
    case "scissors":
      styles = { background: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))", boxShadow: "0px 7px 0px #CF8C21" };
      break;
    case "lizard":
      styles = { background: "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))", boxShadow: "0px 7px 0px #6F33D6" };
      break;
    case "spock":
      styles = { background: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))", boxShadow: "0px 7px 0px #4EA0BA" };
      break;
    default:
      styles = { background: "blue" };
      break;
  }

  function handleClick() {
    if (props.step === 1) {
      props.setChoice(props.name)
      props.setStep(prevStep => prevStep + 1)
      if (props.mode === "standard") {
        props.setHouseChoice(Math.ceil(Math.random() * 3))
      } else if (props.mode === "bonus") {
        props.setHouseChoice(Math.ceil(Math.random() * 5))
      }
    }
  }

  return (
    <button
      className="button"
      style={styles}
      onClick={handleClick}>
      <div className="button__inner">
        {props.name === "rock" && <RockIcon />}
        {props.name === "paper" && <PaperIcon />}
        {props.name === "scissors" && <ScissorsIcon />}
        {props.name === "lizard" && <LizardIcon />}
        {props.name === "spock" && <SpockIcon />}
      </div>
      {/* {props.result === "YOU WIN" && <div style={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", boxShadow: "0 0 60px rgba(200,200,200,0.7)", zIndex: "-1" }} />} */}
    </button>
  )
}