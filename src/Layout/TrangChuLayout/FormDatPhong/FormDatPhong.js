import { getApiUrl } from '../../../api'
import './FormDatPhong.scss'
import { useState } from 'react'
import { Notify } from '../../../components/Notify'

function FormDatPhong () {
  const [ngaynhanphong, setNgaynhanphong] = useState('')
  const [ngaytraphong, setNgaytrasphong] = useState('')
  const [thucdon, setThucdon] = useState('')
  const [phone, setphone] = useState('')
  const [error, setError] = useState('')
  const [type, setType] = useState('')

  const handeldatphong = async e => {
    try {
      e.preventDefault()
      const response = await fetch(`${getApiUrl('backend')}/postdatphong`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ngaynhanphong, ngaytraphong, thucdon, phone })
      })
      if (response.ok) {
        console.log('Thành công')
        setError('Đặt phòng thành công')
        setType('success')
      }
    } catch (error) {
      setError(error)
      setType('error')
      console.error(error)
    }
  }
  return (
    <>
      <section className='formdatphong'>
        <div className='formdatphong_inner_tong'>
          <form onSubmit={handeldatphong}>
            <div className='formdatphong_inner'>
              <div className='div_formdp_input'>
                <label htmlFor=''>Ngày nhận phòng</label>
                <input
                  type='date'
                  value={ngaynhanphong}
                  onChange={e => setNgaynhanphong(e.target.value)}
                  required
                />
              </div>
              <div className='div_formdp_input'>
                <label htmlFor=''>Ngày trả phòng</label>
                <input
                  type='date'
                  value={ngaytraphong}
                  onChange={e => setNgaytrasphong(e.target.value)}
                  required
                />
              </div>
              <div className='div_formdp_input'>
                <label htmlFor=''>Thực đơn</label>
                <select
                  name=''
                  id=''
                  value={thucdon}
                  onChange={e => setThucdon(e.target.value)}
                  required={true}
                >
                  <option
                    value=''
                    disabled
                    hidden
                    selected
                    className='optionone'
                  >
                    thực đơn
                  </option>
                  <option value='Đặt ăn sáng1'>Đặt ăn sáng</option>
                  <option value='Đặt ăn trưa'>Đặt ăn trưa</option>
                  <option value='Đặt ăn tối'>Đặt ăn tối</option>
                </select>
              </div>
              <div className='div_formdp_input'>
                <label htmlFor=''>Số điện thoại</label>
                <input
                  type='text'
                  placeholder='Số điện thoại'
                  value={phone}
                  onChange={e => setphone(e.target.value)}
                  required
                />
              </div>
              <button className='btn_datphong' type='submit'>
                Đặt phòng
              </button>
            </div>
          </form>
        </div>
        <button className='btn_checkngay'>Check ngày trống</button>
      </section>
      {error && <Notify message={error} type={type} setcontent={setError} />}
    </>
  )
}

export default FormDatPhong
