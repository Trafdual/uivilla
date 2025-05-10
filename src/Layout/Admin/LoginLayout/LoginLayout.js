import React, { useState } from 'react'
import './LoginLayout.scss'
import { Notify } from '../../../components/Notify'
import { getApiUrl } from '../../../api'

export default function LoginLayout () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const response = await fetch(`${getApiUrl('backend')}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      const data = await response.json()
      if (data.error) {
        setError(data.error)
      } else {
        sessionStorage.setItem('dangnhap', true)
        window.location.href = '/admin'
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='loginfull'>
      {error && <Notify message={error} type='error' setcontent={setError} />}

      <div className='overlay'></div>
      <div className='login-container'>
        <div className='login-card'>
          <img src='/logo.png' alt='VillaStay' className='logo' />
          <h2 className='login-title'>Welcome to VillaStay</h2>
          <p className='login-subtitle'>Nghỉ dưỡng đẳng cấp</p>
          <form className='login-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Nhập tên đăng nhập'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
