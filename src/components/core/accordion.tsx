// @ts-nocheck
import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionContext = React.createContext({})
const useAccordion = () => React.useContext(AccordionContext)

export function AccordionContainer({
  children,
  className,
}: Readonly<{
  children: ReactNode
  className?: string
}>) {
  return (
    <div className={cn('grid grid-cols-2 gap-1', className)}>{children}</div>
  )
}
export function AccordionWrapper({ children }) {
  return <div>{children}</div>
}

export function Accordion({
  children,
  multiple,
  defaultValue,
}: {
  children: ReactNode
  multiple?: boolean
  defaultValue?: string | undefined | string[]
}) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? (defaultValue ? [defaultValue] : []) : [defaultValue]
  )

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value
      }

      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value)
      }

      return [...currentActiveIndex, value]
    })
  }

  return React.Children.map(children, (child) => {
    const value = child.props.value
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : Array.isArray(activeIndex)
      ? activeIndex[0].includes(value)
      : activeIndex === value

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        <>{child}</>
      </AccordionContext.Provider>
    )
  })
}

export function AccordionItem({ children, value }) {
  const { isActive } = useAccordion()

  return (
    <div
      className={`rounded-lg overflow-hidden mb-2  ${
        isActive
          ? 'active border-2   border-[#F2F2F2]  bg-[#F2F2F2]'
          : 'bg-transparent border-2'
      }
    `}
      value={value}
    >
      {children}
    </div>
  )
}

export function AccordionHeader({
  children,
  icon,
}: Readonly<{
  children: ReactNode
  icon?: any
}>) {
  const { isActive, value, onChangeIndex } = useAccordion()

  return (
    <motion.div
      className={`p-4 cursor-pointer transition-all font-semibold     text-black hover:bg-[#F2F2F2] hover:text-black flex justify-between items-center ${
        isActive ? 'active bg-[#F2F2F2] ' : ' bg-white'
      }
      `}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div
          className={`${
            isActive ? 'rotate-45 ' : 'rotate-0 '
          } transition-transform`}
        >
          {icon}
        </div>
      ) : (
        <ChevronDown
          className={`${
            isActive ? 'rotate-180 ' : 'rotate-0 '
          } transition-transform`}
        />
      )}
    </motion.div>
  )
}

export function AccordionPanel({ children }) {
  const { isActive } = useAccordion()

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', overflow: 'hidden' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className={` bg-[#F2F2F2]
          `}
        >
          <motion.article
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
            transition={{
              type: 'spring',
              duration: 0.4,
              bounce: 0,
            }}
            className={`p-3 bg-transparent text-black `}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
