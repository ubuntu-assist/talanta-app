import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import { Footer } from './Footer'

const SharedLayout = () => {
  return (
    <div className='bg-white text-black'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default SharedLayout
