import { Link } from 'react-router-dom'
import logo from '../assets/images/app/talanta.png'

const ForgotPassword = () => {
  return (
    <section className='bg-gray-50'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          to='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
        >
          <img src={logo} alt='logo' width='250' height='50' />
        </Link>
        <div className='w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8'>
          <h1 className='mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Forgot your password?
          </h1>
          <p className='font-light text-gray-500'>
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form className='mt-4 space-y-4 lg:mt-5 md:space-y-5' action='#'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                placeholder='name@company.com'
                required
              />
            </div>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  aria-describedby='terms'
                  type='checkbox'
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300'
                  required
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='terms' className='font-light text-gray-500'>
                  I accept the{' '}
                  <a
                    className='font-medium text-cyan-600 hover:underline'
                    href='#'
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default ForgotPassword
