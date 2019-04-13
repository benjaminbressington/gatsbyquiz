import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { UrlContext } from '../contexts/UrlContext'

export default ({ to, backTo = '/', children }) => {
  console.log('BackTo From QuizLink', backTo)
  const { setUrl } = useContext(UrlContext)
  if (backTo !== 'undefined') {
    setUrl(backTo)
  }

  return (
    <Link to={to} back={backTo}>
      {children}
    </Link>
  )
}
