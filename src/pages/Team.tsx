import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../designSystem/hooks/use-outside-click'
import { CallToAction } from '../components'

export default function Team() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  )
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0  grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white  sm:rounded-3xl overflow-hidden'
            >
              <motion.div layoutId={`img-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className='w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className='text-neutral-600  text-base'
                    >
                      {active.description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='font-medium text-neutral-700  text-base'
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target='_blank'
                    className='text-sm rounded-full font-bold text-white'
                  >
                    <div className='lg:hover:scale-110 duration-150'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='17'
                        viewBox='0 0 16 17'
                        fill='none'
                        className='h-9 w-9'
                      >
                        <rect
                          x='1'
                          y='1.5'
                          width='14'
                          height='14'
                          rx='7'
                          fill='#1275B1'
                        ></rect>
                        <path
                          d='M6.30928 5.34607C6.30928 5.81335 5.90426 6.19215 5.40464 6.19215C4.90502 6.19215 4.5 5.81335 4.5 5.34607C4.5 4.8788 4.90502 4.5 5.40464 4.5C5.90426 4.5 6.30928 4.8788 6.30928 5.34607Z'
                          fill='white'
                        ></path>
                        <path
                          d='M4.62371 6.81405H6.1701V11.5H4.62371V6.81405Z'
                          fill='white'
                        ></path>
                        <path
                          d='M8.65979 6.81405H7.1134V11.5H8.65979C8.65979 11.5 8.65979 10.0248 8.65979 9.10243C8.65979 8.54881 8.84883 7.99277 9.60309 7.99277C10.4555 7.99277 10.4504 8.71727 10.4464 9.27855C10.4412 10.0122 10.4536 10.7609 10.4536 11.5H12V9.02686C11.9869 7.44769 11.5754 6.72004 10.2216 6.72004C9.4177 6.72004 8.91936 7.08503 8.65979 7.41525V6.81405Z'
                          fill='white'
                        ></path>
                      </svg>
                    </div>
                  </motion.a>
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <section className='pb-10 pt-20 lg:pb-20 lg:pt-[120px]'>
        <div className='max-w-[1400px] mx-auto'>
          <div className='py-6 space-y-4 md:space-y-6 text-center'>
            <div className=''>
              <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
                The team
              </p>
              <h2 className='text-xl md:text-4xl text-gray-900 font-semibold mb-3'>
                Meet the team behind TalantaChain
                {/* <!-- --> */}
              </h2>
              <p className='md:text-lg max-w-2xl text-gray-700 mx-auto'>
                We’re a small team that loves to create great experiences, Click
                any member to explore their Profile
              </p>
            </div>
          </div>
        </div>
      </section>
      <ul className='max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4'>
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className='p-4 flex flex-col  hover:bg-neutral-50  rounded-xl cursor-pointer'
          >
            <div className='flex gap-4 flex-col  w-full'>
              <motion.div layoutId={`img-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className='h-60 w-full  rounded-lg object-cover object-top'
                />
              </motion.div>
              <div className='flex justify-center items-center flex-col'>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className='text-neutral-600  text-center md:text-left text-base'
                >
                  {card.description}
                </motion.p>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className='font-medium text-neutral-800  text-center md:text-left text-base'
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>

      <CallToAction />
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  )
}

const cards = [
  {
    description: 'Duclair Fopa',
    title: 'CEO & Founder',
    src: 'https://readymadeui.com/team-5.webp',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      )
    },
  },
  {
    description: 'Stael Fouwa',
    title: 'Computer Science Teacher',
    src: 'https://readymadeui.com/team-2.webp',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      )
    },
  },

  {
    description: 'Sagesse',
    title: 'Community Manager',
    src: 'https://readymadeui.com/team-3.webp',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      )
    },
  },
  {
    description: 'Jamila',
    title: 'Software Engineer',
    src: 'https://readymadeui.com/team-4.webp',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      )
    },
  },
]
