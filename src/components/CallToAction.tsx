const CallToAction = () => {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 flex items-center justify-between flex-col lg:flex-row'>
          <div className='block text-center mb-5 lg:text-left lg:mb-0'>
            <h2 className='font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2'>
              Ready to start your blockchain journey?
            </h2>
            <p className='text-xl text-indigo-100'>
              Unlock Your Potential with TalantaChain.
            </p>
          </div>
          <a
            href='#'
            className='flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-cyan-600 font-semibold py-4 px-8 transition-all duration-500'
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
export default CallToAction
