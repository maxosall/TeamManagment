import { useState } from 'react'
import SideBar from './components/SideBar'
import MainSection from './components/MainSection'
import React from 'react'
// import './heroicons/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <div className="row">
      <SideBar />
      <MainSection/>
      </div>
    </div>
  )
}

export default App
