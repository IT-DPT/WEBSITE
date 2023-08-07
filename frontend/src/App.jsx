import React from "react"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Navbar from './Components/Navbar'
import Home from "./Components/HomeComponents/Home"
function App() {

  return (
    <> 
    <BrowserRouter >
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>    
      
    </>
  )
}

export default App
