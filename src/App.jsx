import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main></Main>
    </div>
  )
}

export default App
