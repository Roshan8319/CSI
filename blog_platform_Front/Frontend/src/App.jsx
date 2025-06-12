import { useState } from 'react'
import React from 'react'
import { SignIn } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SignIn /> 
      <h1>Welcome to the Blog Platform</h1>
      
    </div>
  )
}

export default App
