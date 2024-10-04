import { useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../../designSystem/helpers/utility'
import { TypewriterEffectSmooth } from '../../designSystem/ui/TypewriterEffect'
import { BackgroundBeamsWithCollision } from '../../designSystem/ui/BackgroundLines'

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = '2024-10-15'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

interface CountdownItemProps {
  unit: 'Day' | 'Hour' | 'Minute' | 'Second'
  text: string
}

const CommingSoon = () => {
  const words = [
    {
      text: 'Foundry',
    },
    {
      text: 'course',
    },
    {
      text: 'comming soon.',
      className: 'dark:text-cyan-300',
    },
  ]

  return (
    <BackgroundBeamsWithCollision>
      <div className='bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] p-4 w-full flex flex-col justify-center items-center  py-16 px-2 md:py-16'>
        <TypewriterEffectSmooth words={words} />
        <div className='flex w-full max-w-5xl items-center'>
          <CountdownItem unit='Day' text='days' />
          <CountdownItem unit='Hour' text='hours' />
          <CountdownItem unit='Minute' text='minutes' />
          <CountdownItem unit='Second' text='seconds' />
        </div>

        <div className='w-full mt-10 flex-col justify-center items-center gap-5 flex'>
          <h6 className='text-center text-cyan-400 text-base font-semibold leading-relaxed'>
            Launched Date: July 23, 2024
          </h6>
          <div className='justify-center items-center gap-2.5 flex sm:flex-row flex-col'>
            <input
              type='text'
              className='w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex'
              placeholder='Type your mail...'
            />
            <button className='sm:w-fit w-full px-3.5 py-2 bg-cyan-400 hover:bg-cyan-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'>
              <span className='px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap'>
                Notify Me
              </span>
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

const CountdownItem: React.FC<CountdownItemProps> = ({ unit, text }) => {
  const { ref, time } = useTimer(unit)

  return (
    <div
      className={cn(
        'flex h-24 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-30 md:gap-2 z-20',
        unit !== 'Second' && 'border-r-[1px] border-slate-200'
      )}
    >
      <div className='relative w-full overflow-hidden text-center'>
        <span
          ref={ref}
          className='block  font-semibold text-white text-xl md:text-3xl mb-2'
        >
          {time}
        </span>
      </div>
      <span className='text-xs font-medium text-slate-100 md:text-sm lg:text-base'>
        {text}
      </span>
    </div>
  )
}

export default CommingSoon

// Custom hook to manage timer and animations
const useTimer = (unit: 'Day' | 'Hour' | 'Minute' | 'Second') => {
  const [ref, animate] = useAnimate()

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeRef = useRef<number>(0)

  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000)

    return () => clearInterval(intervalRef.current || undefined)
  }, [])

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM)
    const now = new Date()
    const distance = +end - +now

    let newTime = 0

    if (unit === 'Day') {
      newTime = Math.floor(distance / DAY)
    } else if (unit === 'Hour') {
      newTime = Math.floor((distance % DAY) / HOUR)
    } else if (unit === 'Minute') {
      newTime = Math.floor((distance % HOUR) / MINUTE)
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND)
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ['0%', '-50%'], opacity: [1, 0] },
        { duration: 0.35 }
      )

      timeRef.current = newTime
      setTime(newTime)

      // Enter animation
      await animate(
        ref.current,
        { y: ['50%', '0%'], opacity: [0, 1] },
        { duration: 0.35 }
      )
    }
  }

  return { ref, time }
}
