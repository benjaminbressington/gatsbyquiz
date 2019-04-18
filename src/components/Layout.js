import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import GlobalStyles from '../components/GlobalStyles'

function Layout ({
  data,
  children,
}) {
  const {
    site: {
      siteMetadata: { description, keywords, title },
    },
  } = data

  return (
    <>
      <GlobalStyles />
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join() },
        ]}
      >
        <html lang="en" />
        <script src="https://js.tito.io/v1" async />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100vh;
          background-color: white;
          padding: 1rem;
        `}
      >
        {children}
      </div>
    </>
  )
}

export default function LayoutWithSiteData (props) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              author
              keywords
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}
