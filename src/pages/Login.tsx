import { Link } from 'react-router-dom'
import logo from '../assets/images/app/talanta.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import useNotification from 'react-toast-popup'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  remember: z.boolean(),
  password: z.string().min(1, 'Password is required'),
})

// Define FormData type based on schema
type FormData = z.infer<typeof formSchema>

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(formSchema),
  })

  const { NotificationComponent, triggerNotification } =
    useNotification('top-right')

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      console.log(data)
      triggerNotification({
        type: 'success',
        message:
          "Login successful! Whether you're just starting or continuing your journey, we’re excited to have you.",
        duration: 6000,
        animation: 'slide',
        onClose: () => {},
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('root', {
          type: 'manual',
          message: error.message,
        })
      }
    }
  }

  return (
    <section className='bg-gray-50'>
      {NotificationComponent}
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
        >
          <img src={logo} alt='logo' width='250' height='50' />
        </a>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                  placeholder='name@company.com'
                  {...register('email')}
                />
                {errors.email && (
                  <p style={{ color: 'red' }}>{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                  {...register('password')}
                />
                {errors.password && (
                  <p style={{ color: 'red' }}>{errors.password.message}</p>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300  '
                      {...register('remember')}
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='remember' className='text-gray-500'>
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to='/forgot-password'
                  className='text-sm font-medium text-cyan-600 hover:underline '
                >
                  Forgot password?
                </Link>
              </div>

              {errors.root && (
                <p style={{ color: 'red' }}>{errors.root.message}</p>
              )}

              <button
                type='submit'
                className='w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                disabled={isSubmitting}
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500 '>
                Don’t have an account yet?{' '}
                <Link
                  to='/register'
                  className='font-medium text-cyan-600 hover:underline '
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
