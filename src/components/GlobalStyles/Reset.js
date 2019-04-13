import React from 'react'
import { Global, css } from '@emotion/core'

export default () => (
  <Global
    styles={css`
      body {
        margin: 0 auto;


      }
      * {
        box-sizing: border-box;
        margin: 0;
      }
    `}
  />
)
