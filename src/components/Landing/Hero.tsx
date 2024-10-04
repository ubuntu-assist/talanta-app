import { cn } from '../../designSystem/helpers/utility'
import photoOne from '../../assets/images/hero/hero-1.avif'
import photoTwo from '../../assets/images/hero/hero-2.avif'
import photoThree from '../../assets/images/hero/hero-3.avif'
import photoFour from '../../assets/images/hero/hero-4.avif'
import photoFive from '../../assets/images/hero/hero-5.avif'
import photoSix from '../../assets/images/hero/hero-6.avif'

import { AnimatedTooltip } from '../../designSystem/ui/AnimatedTooltips'
import { DivOrigami } from '../../designSystem/ui/LogoOrigami'

export function Hero() {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: photoOne,
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: photoTwo,
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: photoThree,
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: photoFour,
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: photoFive,
    },
    {
      id: 6,
      name: 'Dora',
      designation: 'The Explorer',
      image: photoSix,
    },
  ]

  return (
    <div>
      <div className='h-full relative max-w-[1400px] mx-auto overflow-hidden bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 flex flex-col items-center justify-center md:pt-36 xl:rounded-3xl py-16 px-2 md:pb-16'>
        <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

        <h1
          className={cn(
            'font-semibold text-3xl md:text-5xl lg:text-7xl text-white relative z-20'
          )}
        >
          Learn Blockchain <span className='text-cyan-300'>Thrive</span>
        </h1>
        <p className='text-center mt-2 text-white relative z-20 lg:text-xl max-w-xl'>
          Join 100,000+ blockchain learners and professionals. Trusted by
          industry leaders!
        </p>

        <div className='flex flex-row items-center justify-center w-full mt-10'>
          <AnimatedTooltip items={people} />
        </div>
        <p className='text-sm lg:text-lg z-20 text-white text-center mt-10'>
          Our Talanta engineers thrive at top blockchain companies.
        </p>
        <DivOrigami />
      </div>
    </div>
  )
}
