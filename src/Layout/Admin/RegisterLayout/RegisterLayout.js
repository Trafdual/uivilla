import React, { useState, useEffect } from 'react'
import { Notify } from '../../../components/Notify'
import { auth } from '../../../components/FireBase/FireBase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

export default function RegisterLayout () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setphone] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')

  const [confirmationResult, setConfirmationResult] = useState(null)

  const [error, setError] = useState('')

  useEffect(() => {
    const recaptchaContainer = document.getElementById('recaptcha')
    if (!recaptchaContainer) {
      console.error('Container recaptcha không tồn tại')
    } else {
      console.log('Container recaptcha đã sẵn sàng')
    }
  }, [])

  const sendOTP = async e => {
    e.preventDefault()

    const formattedPhone = phone.startsWith('+')
      ? phone
      : `+84${phone.slice(1)}`

    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear()
        window.recaptchaVerifier = null
      }

      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
        size: 'invisible',
        callback: response => {
          console.log('reCAPTCHA resolved', response)
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired')
          alert('reCAPTCHA hết hạn, vui lòng thử lại.')
        }
      })

      const appVerifier = window.recaptchaVerifier

      const result = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier
      )
      setConfirmationResult(result)
      setOtpSent(true)
      alert('Đã gửi mã OTP')
    } catch (err) {
      console.error('Lỗi gửi OTP:', err)
      alert('Không gửi được OTP: ' + err.message)
    }
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const userCred = await confirmationResult.confirm(otp)
      const phoneNumber = userCred.user.phoneNumber

      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, phone: phoneNumber })
      })
      const data = await response.json()
      if (data.error) {
        setError(data.error)
      } else {
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
            <input
              type='phone'
              placeholder='Nhập số điện thoại'
              value={phone}
              onChange={e => setphone(e.target.value)}
              required
            />
            <div id='recaptcha'></div>

            {!otpSent ? (
              <button onClick={e => sendOTP(e)}>Gửi OTP</button>
            ) : (
              <>
                <input
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  placeholder='Nhập mã OTP'
                />
              </>
            )}

            <button type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
