import React from 'react'
import Create from './components/Create'
import Show from './components/Show';

const App = () => {
  return (
    <div className='container text-center'>
      <h1>CRUD - React Context</h1>
      <Create/>
      <Show/>
    </div>
  )
}

export default App