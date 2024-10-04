import { FaQuestion } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'
import { useState } from 'react'
import faqImg from '../../../assets/images/app/faq.jpg'

interface Item {
  id: number
  title: string
  Icon: React.ComponentType
  imgSrc: string
  description: string
}

interface PanelProps {
  open: number
  setOpen: (id: number) => void
  id: number
  Icon: React.ComponentType
  title: string
  imgSrc: string
  description: string
}

const items: Item[] = [
  {
    id: 1,
    title: 'What makes Talantachain blockchain courses different from others?',
    Icon: FaQuestion,
    imgSrc: faqImg,
    description:
      'Talantachain offers unique, practical, and industry-relevant blockchain courses taught by experienced instructors. We focus on real-world applications, giving you the skills you need to excel in your career.',
  },
  {
    id: 2,
    title: "Can I purchase your courses through my company's training budget?",
    Icon: FaQuestion,
    imgSrc: faqImg,
    description:
      "Yes, many of our students purchase our courses through their company's training budget. Our courses are considered a valuable investment in employee skill development, and they can be expensed as part of your company's training and development initiatives.",
  },
  {
    id: 3,
    title: 'How can Amigoscode courses help me advance my blockchain career?',
    Icon: FaQuestion,
    imgSrc: faqImg,
    description:
      "Our courses are designed to bridge the gap between theory and practice. You'll gain hands-on experience, work on real projects, and build a portfolio that will impress employers and clients, opening up new opportunities for career growth.",
  },
  {
    id: 4,
    title: 'Do you offer any certifications upon course completion?',
    Icon: FaQuestion,
    imgSrc: faqImg,
    description:
      'Yes, we provide certificates of completion for all our courses. These certificates are recognized in the industry, and they can help you showcase your skills to potential employers or clients.',
  },
]

const VerticalAccordion: React.FC = () => {
  const [open, setOpen] = useState<number>(items[0].id)

  return (
    <section className='p-0.5 bg-cyan-600'>
      <div className='flex flex-col lg:flex-row h-fit lg:h-[450px] w-full mx-auto shadow overflow-hidden'>
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

const Panel: React.FC<PanelProps> = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}) => {
  const { width } = useWindowSize()
  const isOpen = open === id

  return (
    <>
      <button
        className='bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group'
        onClick={() => setOpen(id)}
      >
        <span
          style={{ writingMode: 'vertical-rl' }}
          className='hidden lg:block text-xl text-gray-800 font-light rotate-180'
        >
          {title}
        </span>
        <span className='block lg:hidden text-xl font-light'>{title}</span>
        <div className='w-6 lg:w-full aspect-square bg-purple-600 text-white grid place-items-center'>
          <Icon />
        </div>
        <span className='w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20' />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial='closed'
            animate='open'
            exit='closed'
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className='w-full h-full overflow-hidden relative bg-black flex items-end'
          >
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='px-4 py-2 bg-black/40 backdrop-blur-sm text-white'
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordion

const panelVariants = {
  open: {
    width: '100%',
    height: '100%',
  },
  closed: {
    width: '0%',
    height: '100%',
  },
}

const panelVariantsSm = {
  open: {
    width: '100%',
    height: '200px',
  },
  closed: {
    width: '100%',
    height: '0px',
  },
}

const descriptionVariants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: '100%' },
}
