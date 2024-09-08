import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Error from './Error'

const First = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<div>Login</div>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default First
