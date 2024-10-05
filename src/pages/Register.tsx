import logo from '../assets/images/app/talanta.png'
import { DragCloseDrawerExample } from '../designSystem/ui/DragCloseDrawer'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import EmailVerificationCallOut from './EmailVerificationCallOut'
import { Link } from 'react-router-dom'

const formSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one symbol'
      )
      .regex(/\d/, 'Password must contain at least one number')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    accept: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'Passwords should match',
        code: z.ZodIssueCode.custom,
      })
    }
  })

// Define FormData type based on schema
type FormData = z.infer<typeof formSchema>

const Register = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      accept: false,
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      console.log(data)
      setShowOtpInput(true)
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
    <>
      {!showOtpInput ? (
        <section className='bg-gray-50'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <Link
              to='/'
              className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
            >
              <img src={logo} alt='logo' width='250' height='50' />
            </Link>
            <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                  Create an account
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
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
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
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      {...register('password')}
                    />
                    {errors.password && (
                      <p style={{ color: 'red' }}>{errors.password.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='confirm-password'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Confirm password
                    </label>
                    <input
                      type='password'
                      id='confirm-password'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && (
                      <p style={{ color: 'red' }}>
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='terms'
                        aria-describedby='terms'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300'
                        {...register('accept')}
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='terms'
                        className='font-light text-gray-500'
                      >
                        I accept the{' '}
                        <a
                          className='font-medium text-cyan-600 hover:underline'
                          onClick={() => setIsOpen(true)}
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    disabled={isSubmitting}
                  >
                    Create an account
                  </button>
                  <p className='text-sm font-light text-gray-500'>
                    Already have an account?{' '}
                    <Link
                      to='/login'
                      className='font-medium text-cyan-600 hover:underline'
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmailVerificationCallOut email={getValues('email')} />
      )}

      <DragCloseDrawerExample isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
export default Register
