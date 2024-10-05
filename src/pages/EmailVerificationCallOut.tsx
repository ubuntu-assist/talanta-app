import logo from '../assets/images/app/talanta.png'
import useNotification from 'react-toast-popup'
import OtpInput from '../components/Auth/OtpInput'

const EmailVerificationCallOut = ({ email }: { email: string }) => {
  const { NotificationComponent, triggerNotification } =
    useNotification('top-right')

  const handleResendEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    triggerNotification({
      type: 'info',
      message:
        'A new OTP has been sent to your email. Please check your inbox and enter the code to continue.',
      duration: 6000,
      animation: 'slide',
      onClose: () => {},
    })
  }

  const onOtpSubmit = (otp: string) => {
    console.log(otp)
  }

  return (
    <div className='relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-gray-50 py-12'>
      {NotificationComponent}
      <a
        href='#'
        className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
      >
        <img src={logo} alt='logo' width='250' height='50' />
      </a>
      <div className='relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl'>
        <div className='mx-auto flex w-full max-w-md flex-col space-y-16'>
          <div className='flex flex-col items-center justify-center text-center space-y-2'>
            <div className='font-semibold text-3xl'>
              <p>Email Verification</p>
            </div>
            <div className='flex flex-row text-sm font-medium text-gray-500'>
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form action='' method='post'>
              <div className='flex flex-col space-y-16'>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />

                <div className='flex flex-col space-y-5'>
                  <div className='flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500'>
                    <p>Didn't recieve code?</p>{' '}
                    <a
                      className='flex flex-row items-center text-cyan-600'
                      href='http://'
                      onClick={handleResendEmail}
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmailVerificationCallOut
