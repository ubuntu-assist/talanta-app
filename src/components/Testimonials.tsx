import SenjaEmbed from './SenjaEmbed'

const Testimonials = ({ isGray = true }) => {
  return (
    <div className={isGray ? 'bg-gray-50' : ''}>
      <div className='w-full px-2.5 md:py-24 py-12 max-w-[1200px] mx-auto'>
        <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8'>
          <div className='py-6 space-y-4 md:space-y-6 text-center'>
            <div className=''>
              <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
                Testimonial
              </p>
              <h2 className='text-xl md:text-4xl font-semibold mb-3 text-gray-900'>
                Real Stories, Real Success
                {/* <!-- --> */}
              </h2>
              <p className='md:text-lg max-w-2xl text-gray-700 mx-auto'>
                Read inspiring testimonials from satisfied learners. Join our
                community and start your journey today.
              </p>
            </div>
          </div>
          <SenjaEmbed widgetId='d20696ed-4719-4fca-ba8f-02348d46c49c' />
          <div className='max-w-xs mx-auto'>
            <a href='https://amigoscode.com/testimonials'>
              <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-cyan-500 rounded-lg justify-center text-black text-sm md:text-base py-2 px-4 md:py-3 md:px-5'>
                <div className=''>View all Testimonials</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
