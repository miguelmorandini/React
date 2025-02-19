// components
import FirstComponent from './components/FirstComponent.jsx'
import MyComponent from './components/MyComponent.jsx'
import Events from './components/Events.jsx'
import Challenge from './components/Challenge.jsx'


// styles / CSS
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Fundamentos de React</h1>
        <FirstComponent/>
        <MyComponent/>
        <Events/>
        <Challenge/>
      </div>
      
    </>
  )
}

export default App
