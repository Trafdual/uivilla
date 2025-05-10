import './TienIchSanCo.scss'
import { useEffect, useRef } from 'react'

function TienIchSanCo() {
  const data = [
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' },
    { img: '/thuvien1.jpg' }
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
      { threshold: 0.1 }
    )

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='div_tienichsanco'>
      <div className='div_tienichsanco_container'>
        <h2>Tiện ích sẵn có</h2>
        <div className='div_tienichsanco_grid'>
          {data.map((item, index) => (
            <div className='div_tienichsanco_item' key={index} ref={el => (itemsRef.current[index] = el)}>
              <img src={item.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TienIchSanCo
