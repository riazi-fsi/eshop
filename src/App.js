import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/'  element={<Home/>}/>
            
        </Routes>
      </Router>

    </div>
  )
}

export default App