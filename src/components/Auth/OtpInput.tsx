import { useEffect, useRef, useState } from 'react'

interface OtpInputProps {
  length: number
  onOtpSubmit: (otp: string) => void
}

const OtpInput = ({ length = 4, onOtpSubmit }: OtpInputProps) => {
  const [otp, setOtp] = useState(new Array(length).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    if (isNaN(Number(value))) return

    // Update the OTP state
    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1) // Limit to a single character
    setOtp(newOtp)

    // Move focus to the next empty input
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      for (let i = index + 1; i < length; i++) {
        if (otp[i] === '') {
          inputRefs.current[i]?.focus()
          break
        }
      }
    }

    const combinedOtp = newOtp.join('')
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp)
  }

  const handleClick = (index: number) => {
    inputRefs.current[index]?.setSelectionRange(1, 1)

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf('')]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.focus()
    }
  }, [])

  return (
    <div className='flex flex-row items-center justify-between mx-auto w-full max-w-xs'>
      {otp.map((value: string, index: number) => (
        <div className='w-16 h-16' key={index}>
          <input
            className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-cyan-700'
            type='text'
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(event) => handleChange(index, event)}
            onClick={() => handleClick(index)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        </div>
      ))}
    </div>
  )
}
export default OtpInput
