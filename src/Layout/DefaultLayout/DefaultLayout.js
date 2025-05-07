import { Footer } from './Footer'
import { Header } from './Header'
import './DefaultLayout.scss'
import { useMediaQuery } from 'react-responsive'

const IsMobile = () => {
  return useMediaQuery({ query: '(max-width: 767px)' })
}

function DefaultLayout ({ children }) {
  const isMobile = IsMobile()

  return (
    <div>
      <Header />
      <div
        style={{ width: `${isMobile ? '100%' : '1200px'}`, margin: '0 auto' }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
