import { useEffect, useState } from 'react'
import { MAX, MIN } from '../designSystem/helpers/constants'

export default function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value)

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX))

    if (value >= MAX) {
      onComplete()
    }
  }, [onComplete, value])

  return (
    <div className='relative h-5 w-[500px] bg-gray-200 border border-gray-400 rounded-full overflow-hidden progress'>
      <span
        className='absolute inset-0 flex justify-center items-center z-10'
        style={{
          color: percent > 49 ? 'white' : 'black',
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className='bg-green-500 text-white h-full text-center'
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: 'left',
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role='progressbar'
      />
    </div>
  )
}
