import { HoverEffect } from '../../designSystem/ui/CardHoverEffect'

export function Features() {
  return (
    <div className='w-full px-2.5 md:py-24 py-12 bg-gray-50'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='py-6 space-y-4 md:space-y-6'>
          <div className=''>
            <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
              Features
            </p>
            <h2 className='text-xl md:text-4xl font-semibold mb-3 text-gray-900'>
              Discover TalantaChain&#x27;s Latest Premium Courses!
              {/* <!-- --> */}
            </h2>
            <p className='md:text-lg max-w-2xl text-gray-700'>
              Dive into expert-led courses to master in-demand skills and
              advance your career.
            </p>
          </div>
        </div>
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}
const projects = [
  {
    title: 'Blockchain Education',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Project Implementation',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Smart Contracts Auditing',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Project Consulting',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'Mentorship',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
]
