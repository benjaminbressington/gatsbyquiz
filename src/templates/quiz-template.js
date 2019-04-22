import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { QuizContextProvider, QuizContextConsumer } from '../contexts/QuizContext'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import GlobalStyles from '../components/GlobalStyles'
import Mcq from '../components/Mcq'
import Footer from '../components/Footer'
// import Score from '../components/Score'
import CloseButton from '../components/CloseButton'
import styled from '@emotion/styled'
import { media } from '../tokens'
// import Layout from '../components/layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const QuizHeader = styled.div`
  opacity: 0.8;
  height: 80px;
  width: 100%;
  background: white;
  position: sticky;
  top: 0px;

`
const QuizBody = styled.div`
  /*important for the pre overflow: auto*/
  width:100%;
  @media ${ media.medium } {
    width: 60%;
    padding-top: 2rem;
    padding-bottom: 150px;
  }
  margin-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  h4 {
    line-height: 1.5;
    font-size: 0.8rem;
    @media ${ media.medium } {
    padding-bottom: 2rem;
    font-size: 1.1rem;
  }
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    @media ${ media.medium } {
      font-size: 1.1rem;
    }
  }


`
const QuizFooter = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`

const QuizTemplate = ({ data, pageContext }) => {
  const { body } = data.mdx.code
  const { answers } = data.mdx.frontmatter
  const { prev, next } = pageContext
  return (
    <Container>
      <GlobalStyles/>
      <QuizHeader>
        <CloseButton />
      </QuizHeader>
      <QuizBody>
        <MDXRenderer pageContext={pageContext}>
          {body}
        </MDXRenderer>
        <QuizContextProvider>
          <Mcq
            answers={answers}
            next={next && next.fields.quizSlug}
            prev={prev && prev.fields.quizSlug}
          />
          <QuizFooter>
            <Footer
              next={next && next.fields.quizSlug}
            />
          </QuizFooter>
        </QuizContextProvider>
      </QuizBody>
    </Container>
  )
}

export const query = graphql`
  query QuestionByquizSlug($quizSlug: String!) {
      mdx(fields: { quizSlug: { eq: $quizSlug } }) {
        code {
          body
          scope
        }
        frontmatter {
          title
          answers{
            value
            correct
          }
        }
        fields {
          quizSlug
        }
      }
    }
`

export default QuizTemplate
