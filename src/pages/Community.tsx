import { motion } from 'framer-motion'
import { CallToAction } from '../components'

const Community = () => {
  return <RevealLinks />
}
export default Community

export const RevealLinks = () => {
  return (
    <>
      <section className='grid place-content-center gap-2  px-8 mt-10 text-black md:py-24 py-12'>
        <div className='py-6 space-y-4 md:space-y-6 text-center'>
          <div className=''>
            <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
              Community
            </p>
            <h2 className='text-xl text-gray-900 md:text-4xl font-semibold mb-3'>
              Connect, Collaborate
            </h2>
            <p className='md:text-lg max-w-2xl text-gray-700 mx-auto'>
              Engage with like-minded individuals, share knowledge, and
              collaborate. Learn, grow, and achieve together.
            </p>
          </div>
        </div>
        <FlipLink href='#'>X</FlipLink>
        <FlipLink href='#'>Linkedin</FlipLink>
        <FlipLink href='#'>Facebook</FlipLink>
        <FlipLink href='#'>Instagram</FlipLink>
        <FlipLink href='#'>Youtube</FlipLink>
        <FlipLink href='#'>Telegram</FlipLink>
        <FlipLink href='#'>Discord</FlipLink>
      </section>
      <CallToAction />
    </>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      href={href}
      className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl text-center'
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}
