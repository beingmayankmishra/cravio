import { useRouteError } from 'react-router-dom'
import React from 'react'

const Error = () => {
    const err = useRouteError();
  return (
    <>
    <h1>Oops!</h1>
    <h2> Hey You Got An Error {err.status}</h2>
    </>
  )
}

export default Error