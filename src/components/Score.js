import React, { useContext } from 'react'
import { ScoreContext } from '../contexts/ScoreContext'
import styled from '@emotion/styled'

const Container = styled.div`
float: right;
height: 100px;
width: 100px;
border-radius: 50%;
border: solid 3px black;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Number = styled.div`
  color: #000;
  font-size: 2rem;
`

const Score = props => {
  const { score } = useContext(ScoreContext)
  return (
    <Container>
      <Number>
        {score}
      </Number>
    </Container>
  )
}

export default Score
