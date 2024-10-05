import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SiEthereum,
  SiBitcoin,
  SiPolygon,
  SiCardano,
  SiBinance,
} from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

// Props for LogoRolodex
interface LogoRolodexProps {
  items: React.ReactNode[] // Array of React elements
}

// Props for LogoItem
interface LogoItemProps {
  children: React.ReactNode
  className?: string
}

export const DivOrigami: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 z-20  px-4 md:flex-row'>
      <LogoRolodex
        items={[
          <LogoItem key={1} className='bg-[#3C3C3D] text-white'>
            {' '}
            {/* Ethereum: dark gray background with white text */}
            <SiEthereum />
          </LogoItem>,
          <LogoItem key={2} className='bg-[#8247E5] text-white'>
            {' '}
            {/* Polygon: purple background with white text */}
            <SiPolygon />
          </LogoItem>,
          <LogoItem key={3} className='bg-[#0033AD] text-white'>
            {' '}
            {/* Cardano: blue background with white text */}
            <SiCardano />
          </LogoItem>,
          <LogoItem key={4} className='bg-[#F7931A] text-white'>
            {/* Bitcoin: orange background with white text */}
            <SiBitcoin />
          </LogoItem>,
          <LogoItem key={5} className='bg-[#F0B90B] text-black'>
            {' '}
            {/* Binance: yellow background with black text */}
            <SiBinance />
          </LogoItem>,
        ]}
      />
    </section>
  )
}

const DELAY_IN_MS = 2500
const TRANSITION_DURATION_IN_SECS = 1.5

const LogoRolodex: React.FC<LogoRolodexProps> = ({ items }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1)
    }, DELAY_IN_MS)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div
      style={{
        transform: 'rotateY(-20deg)',
        transformStyle: 'preserve-3d',
      }}
      className='relative z-0 h-44 w-60 shrink-0 rounded-xl'
    >
      <AnimatePresence mode='sync'>
        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: -index,
            backfaceVisibility: 'hidden',
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          initial={{ rotateX: '0deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '-180deg' }}
          className='absolute left-1/2 top-1/2'
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: index,
            backfaceVisibility: 'hidden',
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: '180deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '0deg' }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          className='absolute left-1/2 top-1/2'
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const LogoItem: React.FC<LogoItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50',
        className
      )}
    >
      {children}
    </div>
  )
}
