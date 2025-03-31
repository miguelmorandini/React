import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./components/MyComponent";
function App() {
  const n = 15

  return (
    <>
      <div className='App'>
        {/* CSS global*/}
        <h1>React com CSS</h1>

        {/* CSS de componente */}
        <MyComponent />
        <p>Este paragrafo é de componente</p>

        {/* Inline CSS */}
        <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado inline</p>

        {/* CSS Inline dinamico */}
        <h2 style={n < 10 ? { color: "purple" } : { color: "pink" } }>CSS dinamico</h2>
        <h2 style={n > 10 ? { color: "purple" } : { color: "pink" } }>CSS dinamico</h2>
    </div>
    </>
  )
}

export default App
