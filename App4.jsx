import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = ["Learn JSX","Create Component","Master State"];

  return (
    <>
      <div>
        <h1>My Task List</h1>
        <p>Total tasks {tasks.length}</p>
      </div>
     
   
    </>
  )
}

export default App
