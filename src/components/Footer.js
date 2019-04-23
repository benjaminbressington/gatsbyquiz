import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { QuizContext } from '../contexts/QuizContext';
import { UrlContext } from '../contexts/UrlContext';
import styled from '@emotion/styled';
import { media, colors, text } from '../tokens';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1;
  @media ${ media.medium } {
    flex-direction: row;
    justify-content: space-between;
    min-height: 150px;
    background-color: rgba(255, 255, 255, 0.6);
  }
  transition: background-color 200ms linear;
  ${ ({ correct }) =>
    correct &&
    `
    height: 200px;
    background-color: ${ colors.green300 };
    @media ${ media.medium } {
      height: 150px;
      background-color: ${ colors.green300 };
    }
  ` }
  ${ ({ incorrect }) =>
    incorrect &&
    `
    height: 200px;
    background-color: ${ colors.red300 };
    @media ${ media.medium } {
      height: 150px;
      background-color: ${ colors.red300 };
    }
  ` }
`
const Feedback = styled.div`
  ${ ({ display }) =>
    display &&
    `
    margin-top: 1rem;
    color: white;
    font-size: 2rem;
    @media ${ media.medium } {
      margin-top: 0;
      margin-left: 20%;
    }
  ` }
`

// a button can't have a Link as a child
const ContinueButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95%;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 30px;
  padding: 0.7rem 2rem 0.7rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: white;
  text-decoration: none;
  @media ${ media.medium } {
    margin-right: 20%;
    margin-bottom: 0;
    min-width: 150px;
  }
  ${ ({ correct }) =>
    correct &&
    `
    background-color: ${ colors.green600 };
    border: 2px solid ${ colors.green400 };
  ` }
  ${ ({ incorrect }) =>
    incorrect &&
    `
    background-color: ${ colors.red600 };
    border: 2px solid ${ colors.red400 };
  ` }
`
// a div cannot have the disabled property
const AnswerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95%;
  padding: 0.7rem 2rem 0.7rem 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;
  @media ${ media.medium } {
    margin-bottom: 0;
    min-width: 150px;
    margin-right: 20%;
  }
`
const Footer = ({ next }) => {
  const {
    selected,
    setSelected,
    answered,
    setAnswered,
    correct,
    setCorrect
  } = useContext(QuizContext)
  const { url } = useContext(UrlContext)
  console.log('answered is ', answered, ' selected is ', selected)
  const handleSubmit = () => {
    if (correct) {
      setAnswered(!answered)
    } else {
      setAnswered(!answered)
    }
  }
  return (
    <FooterContainer
      correct={correct && answered}
      incorrect={!correct && answered}
    >
      {!answered && <Feedback />}
      {answered && correct && (
        <Feedback display={answered}>
          <p>{text.feedback.correct}</p>
        </Feedback>
      )}
      {answered && !correct && (
        <Feedback display={answered}>
          <p>{text.feedback.incorrect}</p>
        </Feedback>
      )}
      {!answered ? (
        <AnswerButton disabled={selected === ''} onClick={handleSubmit}>
          {text.answerButton.answer}
        </AnswerButton>
      ) : answered && next ? (
        <ContinueButton
          correct={correct && answered}
          incorrect={!correct && answered}
          to={next}
        >
          {text.answerButton.continue}
        </ContinueButton>
      ) : (
        <ContinueButton
          correct={correct && answered}
          incorrect={!correct && answered}
          to={url}
        >
          {text.answerButton.end}
        </ContinueButton>
      )}
    </FooterContainer>
  )
};

export default Footer
