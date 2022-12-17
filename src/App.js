import React, { useState } from "react";
import "./styles.css";
const qoutes = [
  "Be yourself; everyone else is already taken.",
  `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
  "So many books, so little time.",
  "Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.",
  "You only live once, but if you do it right, once is enough."
];

export default function App() {
  const [qoute, setqoute] = useState(qoutes[0]);
  function next() {
    const random = qoutes[Math.floor(Math.random() * qoutes.length)];
    setqoute(random);
  }
  return (
    <div className="App">
      <div className="text">{qoute}</div>
      <button className="button" onClick={next}>
        Next
      </button>
    </div>
  );
}
