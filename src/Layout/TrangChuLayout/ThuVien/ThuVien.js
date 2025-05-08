import './ThuVien.scss'
import { useEffect, useRef } from 'react'

function ThuVien () {
  const data = [
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    },
    {
      img: '/thuvien1.jpg'
    }
  ]

  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='div_thuvien'>
      <div className='div_thuvien_tong'>
        <p className='div_thienduong_title'>Thư viện</p>
        <h2>Hãy đến để trải nghiệm</h2>
        <div className='list_anh_thuvien'>
          {data.map((item, index) => (
            <div className='anh_thuvien_item' key={index}  ref={el => (itemsRef.current[index] = el)}>
              <img src={item.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThuVien
