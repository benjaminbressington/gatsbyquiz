import React, { useState, useEffect } from 'react'

const ScoreContext = React.createContext()

function ScoreContextProvider (props) {
  // We set an initial score to get the score on refresh or to avoid null
  // And we make it a function so it's only called the first time when the component mount
  // Number() to transfom string -> int
  // Window is not defined during build

  let initialScore = () => (typeof window !== `undefined`) &&
  Number(window.localStorage.getItem('score') || 0)

  const [score, setScore] = useState(initialScore)

  const handleScore = points => setScore(score + Number(points))
  const resetScore = () => setScore(0)
  console.log('score is', score)
  // We want to set the score only when it changes, so we pass as a second argument
  // an array with the value we want to observe
  useEffect(
    () => {
      window.localStorage.setItem('score', score)
    }, [score])

  let value = { score, handleScore, resetScore }

  return (
    <ScoreContext.Provider value={value}>{props.children}</ScoreContext.Provider>
  )
}

let ScoreContextConsumer = ScoreContext.Consumer

export { ScoreContext, ScoreContextProvider, ScoreContextConsumer }
