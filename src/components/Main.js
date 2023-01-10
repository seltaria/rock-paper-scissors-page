import React from "react";
import { Button } from "./Button";
import { Picked } from "./Picked";

export function Main() {

  const [choice, setChoice] = React.useState("");
  const [houseChoice, setHouseChoice] = React.useState("");
  const [step, setStep] = React.useState(1);

  const buttonArray = ["rock", "paper", "scissors"];
  const buttonElements = buttonArray.map(btn =>
    <Button
      name={btn}
      setChoice={setChoice}
      step={step}
      setStep={setStep}
      setHouseChoice={setHouseChoice}
      key={btn}
    />);

  return (
    <div className="main">
      {step === 1 && <div className="main__buttons">{buttonElements}</div>}
      {step === 2 &&
        <Picked
          setStep={setStep}
          choice={choice}
          houseChoice={houseChoice} />}
    </div>
  )
}