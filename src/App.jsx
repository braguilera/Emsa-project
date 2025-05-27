import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Technology from './screens/Technology'
import Services from './screens/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Services></Services>
      <Technology></Technology>
    </>
  )
}

export default App
