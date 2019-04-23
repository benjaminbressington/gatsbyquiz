import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "components/Layout";
import Card from "components/Card";
import QuizLink from "components/QuizLink";
import { media } from "../tokens";

export default function Index() {
  return (
    <Layout>
      <div style={{ height: "60px" }}>
        <h1>Ultimate Quizzes</h1>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 20px;
          @media ${media.medium} {
            grid-template-columns: repeat(auto-fit, 300px);
          }
        `}
      >
        <Card
          backgroundColor="#5bc0eb"
          title="CSS"
          description="Take a little quiz to test your CSS knowledges..."
          link="css-01"
        />
        <Card
          backgroundColor="#fa7921"
          title="MDX"
          description="Take a little quiz to test your MDX knowledges..."
          link="mdx-01"
        />
        <Card
          backgroundColor="#9bc53d"
          title="GATSBY"
          description="Take a little quiz to test your Gatsby knowledges..."
          link="gatsby-01"
        />
      </div>
    </Layout>
  );
}
