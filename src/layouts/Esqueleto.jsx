import React from 'react'
import TopBar from './TopBar'

const Esqueleto = ({children}) => {
  return (
    <><TopBar />
    {children}
    </>
  )
}

export default Esqueleto