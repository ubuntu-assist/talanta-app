import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import { Footer } from './Footer'

const SharedLayout = () => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          top: '16px',
          left: '16px',
          right: '16px',
          bottom: '16px',
          pointerEvents: 'none',
        }}
      ></div>
      <section className='h-full'>
        <NavBar />

        <Outlet />
        <Footer />
      </section>
    </>
  )
}
export default SharedLayout
