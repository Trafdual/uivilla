/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './LoginLayout.scss'

export default function LoginLayout () {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2 className='login-title'>Welcome to VillaStay</h2>
        <p className='login-subtitle'>Your luxury escape starts here</p>
        <form className='login-form'>
          <input type='email' placeholder='Email address' required />
          <input type='password' placeholder='Password' required />
          <button type='submit'>Sign In</button>
        </form>
        <div className='login-footer'>
          <p>
            Don't have an account? <a href='#'>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}
