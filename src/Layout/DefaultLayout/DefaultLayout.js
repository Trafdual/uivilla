import { Header } from './Header'
import './DefaultLayout.scss'
import { useMediaQuery } from 'react-responsive'
import Footer from './Footer/Footer'

const IsMobile = () => {
  return useMediaQuery({ query: '(max-width: 767px)' })
}

function DefaultLayout ({ children }) {
  const isMobile = IsMobile()

  return (
    <div>
      <Header />
      <div style={{ width: `${isMobile ? '100%' : '100%'}`, margin: '0 auto' }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
