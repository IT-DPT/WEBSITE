import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./Components/HomeComponents/Home"
import FacultyDetailes from "./Components/NavComponents/FacultyDetailes"
import Curriculum from "./Components/NavComponents/Curriculum"
import Contact from "./Components/NavComponents/Contact"
import Layout from "./Components/Layout"
import Login from "./Components/LoginSignUp/Login"
import AddFaculty from "./Components/Admin/AddFaculty"
import AddUser from './Components/Admin/AddUser'
import Dashboard from "./Components/Admin/dashboard"
import Sidebar from "./Components/Admin/Sidebar"
import AddNotes from "./Components/Admin/AddNotes"
function App() {

  return (
    <>
      <BrowserRouter >
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path='/FacultyDetailes' element={<FacultyDetailes />}></Route>
            <Route exact path='/Curriculum' element={<Curriculum />}></Route>
            <Route exact path='/Contact' element={<Contact />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
          </Route>

          <Route path='/Admin' element={<Sidebar />}>
            <Route exact path='/Admin/Dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/Admin/AddStudent' element={<AddUser />}></Route>
            <Route exact path='/Admin/ManageStudent' element={<AddUser />}></Route>
            <Route exact path='/Admin/AddFaculty' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/ManageFaculty' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/AddNotes' element={<AddNotes />}></Route>
            <Route exact path='/Admin/ManageNotes' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/AddQP' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/ManageQP' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/AddTimeTable' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/ManageTimeTable' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/AddNotice' element={<AddFaculty />}></Route>
            <Route exact path='/Admin/ManageNotice' element={<AddFaculty />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
