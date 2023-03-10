import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Login.css'
import { auth,provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider';

const Login = () => {
    const [{ }, dispatch] = useStateValue()
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

  return (
      <div className='login'>
          <div className='login_container'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt="WhatsApp" />
              <div className='login_text'>
                  <h1>Login to WhatsApp</h1>
              </div>
              <Button onClick={signIn}>Sign In with Google</Button>
          </div>
    </div>
  )
}

export default Login