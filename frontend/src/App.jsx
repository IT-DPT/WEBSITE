import React from "react"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Components/HomeComponents/Home"
import FacultyDetailes from "./Components/NavComponents/FacultyDetailes"
import Curriculum from "./Components/NavComponents/Curriculum"
import Contact from "./Components/NavComponents/Contact"
import Layout from "./Components/Layout"
import Login from "./Components/LoginSignUp/Login"
function App() {

  return (
    <> 
    <BrowserRouter >
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path='/Faculty' element={<FacultyDetailes />}></Route>
      <Route exact path='/Curriculum' element={<Curriculum />}></Route>
      <Route exact path='/Contact' element={<Contact />}></Route>
      <Route exact path='/Login' element={<Login />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>    
      
    </>
  )
}

export default App
