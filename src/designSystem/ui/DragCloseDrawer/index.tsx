import React, { ReactNode } from 'react'
import { useMeasure } from '@uidotdev/usehooks'
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from 'framer-motion'
import { TermsAndConditions } from '../../../pages'

interface DragCloseDrawerProps {
  open: boolean
  setOpen: (value: boolean) => void
  children: ReactNode
}

export const DragCloseDrawerExample = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) => {
  return (
    <div className='gridplace-content-center'>
      <DragCloseDrawer open={isOpen} setOpen={setIsOpen}>
        <TermsAndConditions />
      </DragCloseDrawer>
    </div>
  )
}

const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
  open,
  setOpen,
  children,
}) => {
  const [scope, animate] = useAnimate()
  const [drawerRef, { height }] = useMeasure()
  const y = useMotionValue(0)
  const controls = useDragControls()

  const handleClose = () => {
    animate(scope.current, { opacity: [1, 0] })

    const yStart = typeof y.get() === 'number' ? y.get() : 0

    animate('#drawer', { y: [yStart, height] })

    setOpen(false)
  }

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className='fixed inset-0 z-50 bg-neutral-950/70'
        >
          <motion.div
            id='drawer'
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ ease: 'easeInOut' }}
            className='absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-white'
            style={{ y }}
            drag='y'
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose()
              }
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div className='absolute left-0 right-0 top-0 z-10 flex justify-center bg-cyan-900 p-4'>
              <button
                onPointerDown={(e) => controls.start(e)}
                className='h-2 w-14 cursor-grab touch-none rounded-full bg-cyan-700 active:cursor-grabbing'
              />
            </div>
            <div className='relative z-0 h-full overflow-y-scroll p-4 pt-12'>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
