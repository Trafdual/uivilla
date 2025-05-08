import './FormDatPhong.scss'

function FormDatPhong () {
  return (
    <section className='formdatphong'>
      <div className='formdatphong_inner_tong'>
        <form action=''>
          <div className='formdatphong_inner'>
            <div className='div_formdp_input'>
              <label htmlFor=''>Ngày nhận phòng</label>
              <input type='date' required />
            </div>
            <div className='div_formdp_input'>
              <label htmlFor=''>Ngày trả phòng</label>
              <input type='date' required />
            </div>
            <div className='div_formdp_input'>
              <label htmlFor=''>Thực đơn</label>
              <input type='text' placeholder='Thực đơn' required />
            </div>
            <div className='div_formdp_input'>
              <label htmlFor=''>Số điện thoại</label>
              <input type='date' placeholder='Số điện thoại' required />
            </div>
            <button className='btn_datphong' type='submit'>
              Đặt phòng
            </button>
          </div>
        </form>
      </div>
      <button className='btn_checkngay'>
        Check ngày trống
      </button>
    </section>
  )
}

export default FormDatPhong
