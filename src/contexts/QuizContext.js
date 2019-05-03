import React, { useState } from 'react'

const QuizContext = React.createContext()

function QuizContextProvider (props) {
  // to handle the disabled prop
  const [selected, setSelected] = useState('')
  // to handle the button value (answer or continue)
  const [answered, setAnswered] = useState(false)
  // to handle feedback and score
  const [correct, setCorrect] = useState(false)
  let value = {
    selected,
    setSelected,
    answered,
    setAnswered,
    correct,
    setCorrect
  }

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  )
}
let QuizContextConsumer = QuizContext.Consumer

export { QuizContext, QuizContextProvider, QuizContextConsumer }
