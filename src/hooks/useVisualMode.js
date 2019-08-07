import { useState,useEffect } from "react";

export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([]);

  function transition(valueTo) {
    setHistory([...history, mode]);
    setMode(valueTo);
  }

  function back() {
    setMode(history.pop());
  }

  return {transition, mode, back};
}
