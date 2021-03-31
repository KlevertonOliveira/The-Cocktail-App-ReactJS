import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main>
      <h1>Page Not Found.</h1>
      <Link to='/'>Back to Home</Link>
    </main>
  )
}

export default Error
