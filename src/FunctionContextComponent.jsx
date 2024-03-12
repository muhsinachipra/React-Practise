import React, { useContext } from 'react'
import { ThemeContext } from './App'

function FunctionalComponent() {
  const darkTheme = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <div style={themeStyle}>
      Function Component
    </div>
  )
}

export default FunctionalComponent
