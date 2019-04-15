import React from 'react'
import { UrlContextProvider } from './src/contexts/UrlContext'

export const wrapRootElement = ({ element }) => (
    <UrlContextProvider>
      {element}
    </UrlContextProvider>
)
