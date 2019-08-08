import { useState } from "react";

export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([value]);

  function transition(valueTo, skipPrevious) {
    setMode(valueTo);
    if (!skipPrevious) {
      setHistory([...history, valueTo]);
    }
  }

  function back() {
    if(history.length >= 1) {
      const hist = [...history];
      setMode(hist.pop());
      setHistory(hist);
    } else {
      setMode(history[0]);
    }
  }

  return {transition, mode, back};
}
