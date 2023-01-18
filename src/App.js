import React from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Rules } from "./components/Rules";

export function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [mode, setMode] = React.useState("standard");

  const dispatch = useDispatch();

  function openRules() {
    setIsModalOpen(true);
  }

  function toggleMode() {
    setMode(prevMode => prevMode === "standard" ? "bonus" : "standard");
    dispatch({
      type: "RESET_SCORE"
    })
  }

  return (
    <div className="app">
      <Header mode={mode} />
      <Main mode={mode} />
      <div className="main__btns">
        <button
          className="rules__button"
          onClick={openRules}>
          RULES</button>
        <button
          className="mode__button"
          onClick={toggleMode}>
          CHANGE MODE</button>
      </div>
      {isModalOpen && <Rules setIsModalOpen={setIsModalOpen} mode={mode} />}
    </div>
  );
}
