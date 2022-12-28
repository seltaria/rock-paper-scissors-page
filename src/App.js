import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {

  // console.log('app')

  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <Header score={score} />
      <Main setScore={setScore} />
    </div>
  );
}
