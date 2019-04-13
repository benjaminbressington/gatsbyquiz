import React, { useState, useContext } from 'react'
import RadioItem from './RadioItem'
import styled from '@emotion/styled'
import { media } from '../tokens'

const RadioContainer = styled.div`
  margin: auto 0;
  padding-top: 1rem;
  @media ${ media.medium } {
    padding: 2rem;
  }
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
`

const Mcq = ({
  answered,
  answers,
  selected,
  setSelected,
  setCorrect,
}) => {
  const handleChange = answer => {
    const selectedAnswer = answers.filter(ans => ans.value === answer)
    if (selectedAnswer[0].correct) {
      setSelected(answer)
      setCorrect(true)
    } else {
      setSelected(answer)
      setCorrect(false)
    }
  }

  return (
    <RadioContainer>
      {answers.map(answer => (
        <RadioItem
          id={answer.value}
          name={answer.value}
          label={answer.value}
          onChange={handleChange}
          checked={selected === answer.value}
          answered={answered}
        />
      ))}
    </RadioContainer>
  )
}

export default Mcq
