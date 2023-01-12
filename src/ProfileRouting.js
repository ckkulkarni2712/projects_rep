import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProfileSubmit from './ProfileSubmit'
const ProfileRouting = () => {
  return (
    <div><Router>
    <Routes>
        <Route path='/profilesubmit' element={<ProfileSubmit />} />
    </Routes>
</Router></div>
  )
}

export default ProfileRouting