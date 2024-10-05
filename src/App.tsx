import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop, SharedLayout } from './components'
import {
  Blog,
  Community,
  CourseDetails,
  Courses,
  ErrorPage,
  Events,
  ForgotPassword,
  Home,
  Login,
  PrivacyAndPolicy,
  Register,
  Support,
  Team,
  TermsAndConditions,
} from './pages'
import { useCookies } from 'react-cookie'
import CookieConsent from './components/Auth/CookieConsent'

function App() {
  const [cookies] = useCookies(['cookieConsent'])

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!cookies.cookieConsent && <CookieConsent />}
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='community' element={<Community />} />
          <Route path='support' element={<Support />} />
          <Route path='privacy' element={<PrivacyAndPolicy />} />
          <Route path='terms' element={<TermsAndConditions />} />
          <Route path='team' element={<Team />} />
          <Route path='events' element={<Events />} />

          <Route path='blog'>
            <Route index element={<Blog />} />
            {/* <Route path=':productId' element={<SingleProduct />} /> */}
          </Route>

          <Route path='courses'>
            <Route index element={<Courses />} />
            <Route path=':courseId' element={<CourseDetails />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
