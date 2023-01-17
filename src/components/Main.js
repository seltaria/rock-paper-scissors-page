import React from "react";
import { Button } from "./Button";
import { Picked } from "./Picked";

export function Main(props) {

  const [choice, setChoice] = React.useState("");
  const [houseChoice, setHouseChoice] = React.useState("");
  const [step, setStep] = React.useState(1);

  const buttonArray = props.mode === "standard" ? ["rock", "paper", "scissors"] : ["rock", "paper", "scissors", "lizard", "spock"];
  const buttonElements = buttonArray.map(btn =>
    <Button
      name={btn}
      setChoice={setChoice}
      step={step}
      setStep={setStep}
      setHouseChoice={setHouseChoice}
      key={btn}
      mode={props.mode}
    />);

  return (
    <div className="main">
      {step === 1 && <div className={`main__buttons ${props.mode === "bonus" ? "bonus" : ""}`}>{buttonElements}</div>}
      {step === 2 &&
        <Picked
          setStep={setStep}
          choice={choice}
          houseChoice={houseChoice} />}
    </div>
  )
}