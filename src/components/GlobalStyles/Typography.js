import React from 'react'
import { Global, css } from '@emotion/core'
import { colors, fonts, media } from '../../tokens'

export default () => (
  <Global
    styles={css`
      html,
      body {
        color: ${ colors.text };
        font-family: ${ fonts.default };
        font-size: ${ fonts.sizeSm };
        line-height: 1.45;
        text-decoration-skip: ink;
        @media ${ media.medium } {
          font-size: ${ fonts.sizeMd };
        }
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${ colors.heading };
        font-family: ${ fonts.heading };
        font-weight: 900;
        line-height: 1.1;
        margin-top: 1.5rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:first-child {
          margin-top: 0;
        }
        & + p {
          margin-top: 0.5rem;
        }
      }
      h2 {
        font-size: 1.5625rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      h4 {
        font-size: 1.125rem;
      }
      h5 {
        font-size: 1rem;
      }
      h6 {
        font-size: 0.875rem;
      }
      h4,
      h5,
      h6 {
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
      }
      ol,
      ul {
        padding-left: 1.25rem;
      }
      li {
        margin-top: 0.5rem;
      }
      strong {
        color: ${ colors.textDark };
      }
      /*Remove Gray Highlight When Tapping Links in Mobile Safari adn Chrome*/
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      /* Footnotes are auto-generated, so a little bit of nonsense is required. */
      sup {
        margin: 0 0.25em;
        line-height: 1;
        vertical-align: baseline;
      }
      blockquote {
        border-left: 1px solid ${ colors.primary };
        clear: both;
        color: ${ colors.textLight };
        font-size: 1.125rem;
        font-style: italic;
        overflow: hidden;
        padding: 1rem 10px;
        @media ${ media.medium } {
          margin-left: -20px;
          margin-right: -20px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      blockquote > p:last-child strong:only-child:not(.no-attribution) {
        display: block;
        color: ${ colors.gray };
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        text-align: right;
        &::before {
          content: '– ';
        }
      }
      blockquote > p:last-child strong:only-child a {
        border-color: ${ colors.gray };
        color: inherit;
        :hover,
        :active,
        :focus {
          border-color: ${ colors.primary };
          color: ${ colors.primaryDark };
        }
      }
      abbr {
        border-bottom: 1px dotted ${ colors.gray };
        cursor: help;
        text-decoration: none;
      }
code {
    padding: 2px 4px;
    background: #f4f3fa;
    color: #222426;
    border-radius: 3px;
  }
  a {
    code {
      color: #573EDE;
    }
  }
  pre {
    background-color: #061526 !important;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }


    `}
  />
)
