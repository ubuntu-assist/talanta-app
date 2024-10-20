import { Link } from 'react-router-dom'
// import ProgressBar from '../components/ProgressBar'
import MultiSelectSearch from '../components/MultiSelectSearch'
import Stepper from '../designSystem/ui/Stepper'

const ErrorPage = () => {
  // const [value, setValue] = useState(0)
  // const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   setInterval(() => {
  //     setValue((val) => val + 0.1)
  //   }, 20)
  // }, [])

  const CHECKOUT_STEPS = [
    {
      name: 'Customer Info',
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: 'Shipping Info',
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: 'Payment',
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: 'Delivered',
      Component: () => <div> Your order has been delivered.</div>,
    },
  ]

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          {/* <ProgressBar value={value} onComplete={() => setSuccess(true)} />
          <span>{success ? 'Complete!' : 'Loading...'}</span> */}
          <Stepper stepsConfig={CHECKOUT_STEPS} />
          <MultiSelectSearch />
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
            404
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>
            Something's missing.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500'>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{' '}
          </p>
          <Link
            to='/'
            className='inline-flex text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ErrorPage
