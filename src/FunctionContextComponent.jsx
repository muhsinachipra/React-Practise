import { useTheme, useThemeUpdate } from './ThemeContext'

function FunctionalComponent() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Component</div>
    </>
  )
}

export default FunctionalComponent


