import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Define the type for the position state
interface Position {
  left: number
  width: number
  opacity: number
}

// Define the type for the Tab's props
interface TabProps {
  children: React.ReactNode
  setPosition: React.Dispatch<React.SetStateAction<Position>>
}

// Define the type for the Cursor's props
interface CursorProps {
  position: Position
}

export const SlideTabsComponent: React.FC = () => {
  return <SlideTabs />
}

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'
    >
      <Tab setPosition={setPosition}>Latest</Tab>
      <Tab setPosition={setPosition}>Top</Tab>
      <Tab setPosition={setPosition}>Discussions</Tab>
      <Cursor position={position} />
    </ul>
  )
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement | null>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  )
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className='absolute z-0 h-7 rounded-full bg-black md:h-12'
    />
  )
}
