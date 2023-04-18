import React from 'react'
import "./App.css"
import ParentComponent from './components/ParentComponent'

const App = () => {
  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <ParentComponent/>
    </div>
  )
}

export default App
