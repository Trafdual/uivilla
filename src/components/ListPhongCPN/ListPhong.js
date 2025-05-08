import './ListPhongCPN.scss'

function ListPhong () {
  const data = [
    {
      name: 'Villa nhà chính',
      img: '/phong1.jpg',
      link: '/phong1.jpg'
    },
    {
      name: 'Bungalow nhà nón 2 tầng VIP',
      img: '/phong2.jpg',
      link: '/phong2.jpg'
    },
    {
      name: 'Bungalow song lập 2 phòng ngủ',
      img: '/phong3.jpg',
      link: '/phong3.jpg'
    }
  ]
  return (
    <div className='list_phong_tong'>
      {data.map((item, index) => (
        <div className='list_phong_item' key={index}>
          <img src={item.img} alt='' />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ListPhong
