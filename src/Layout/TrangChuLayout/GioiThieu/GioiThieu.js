import './GioiThieu.scss'

function GioiThieu () {
  return (
    <div className='div_gioithieu_trangchu'>
      <div className='div_gioithieu_tong'>
        <div className='div_gioithieu'>
          <p className='div_gioithieu_title'>GIỚI THIỆU</p>
          <h2>Soca Villa</h2>
          <p>
            Tọa lạc ngay tại Ba Vì xinh đẹp và thơ mộng, Soca villa gồm nhiều
            phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại,
            khu nhà hàng, hồ bơi rộng rãi và chuỗi Bungalow độc đáo được thiết
            kế gần gũi với thiên nhiên.
          </p>
        </div>
        <div className='div_gioithieu_video'>
          <iframe
            width='100%'
            height='400'
            src='https://www.youtube.com/embed/Wlq0s4hf0tw?feature=oembed&amp;autoplay=1&amp;playsinline=1&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0'
            title='YouTube video'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default GioiThieu
