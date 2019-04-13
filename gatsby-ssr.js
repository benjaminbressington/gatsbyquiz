import React from 'react'

import { ScoreContextProvider } from './src/contexts/ScoreContext'
import { UrlContextProvider } from './src/contexts/UrlContext'

export const wrapRootElement = ({ element }) => (
  <ScoreContextProvider>
    <UrlContextProvider>
      {element}
    </UrlContextProvider>
  </ScoreContextProvider>
)
