import React, { useState } from "react";

const QuizContext = React.createContext();

function QuizContextProvider(props) {
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  let value = {
    selected,
    setSelected,
    answered,
    setAnswered,
    correct,
    setCorrect
  };

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
}
let QuizContextConsumer = QuizContext.Consumer;

export { QuizContext, QuizContextProvider, QuizContextConsumer };
