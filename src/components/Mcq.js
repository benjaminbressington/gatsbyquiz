import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { QuizContext } from '../contexts/QuizContext'
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

const Mcq = ({ answers, next }) => {
  const { selected, setSelected, answered, setCorrect } = useContext(QuizContext)

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
          key={answer.value}
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

Mcq.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired,
      feedback: PropTypes.srting,
    })
  ).isRequired,
}

export default Mcq
