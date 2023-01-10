import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Rules } from "./components/Rules";

export function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function openRules() {
    setIsModalOpen(true);
  }

  return (
    <div className="app">
      <Header />
      <Main />
      <button
        className="rules__button"
        onClick={openRules}>
        RULES</button>
      {isModalOpen && <Rules setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
