import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
import Popup from 'reactjs-popup';
import Link from '@material-ui/core';
//import {Link, Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProfileSubmit from './ProfileSubmit';
//import ProfileRouting from './ProfileRouting';
const Header = () => {

  return (
      <div className='header'>
          <IconButton>
              <PersonIcon fontSize='large' className='header__icon' />
          </IconButton>
          <img className='header__logo'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="tinder" />
          
          <Popup trigger={<IconButton>
              <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>} 
              position="right center"><ProfileSubmit />              </Popup>
          
          
          
          
          {/*
          <Router>
              
              <Routes>
                  <Route path="profilesubmit" element={<ProfileSubmit />} />
                      
                  </Routes>
                 
                  </Router> */}
    </div>
  )
}
export default Header