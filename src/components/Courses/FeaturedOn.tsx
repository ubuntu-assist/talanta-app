import { InfiniteSlider } from '../core/infinite-slider'

const FeaturedOn = () => {
  return (
    <section className='py-24 '>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'>
        <div className='mb-20 text-center'>
          <span className='text-cyan-500 text-center font-medium mb-4 block'>
            OUR PARTNERS
          </span>
          <h1 className='text-4xl text-gray-900 text-center font-bold'>
            We work with the best partners
          </h1>
        </div>
        <InfiniteSlider gap={24} reverse>
          <img
            src='https://motion-primitives.com/apple_music_logo.svg'
            alt='Apple Music logo'
            className='h-[120px] w-auto'
          />
          <img
            src='https://motion-primitives.com/chrome_logo.svg'
            alt='Chrome logo'
            className='h-[120px] w-auto'
          />
          <img
            src='https://motion-primitives.com/strava_logo.svg'
            alt='Strava logo'
            className='h-[120px] w-auto'
          />
          <img
            src='https://motion-primitives.com/nintendo_logo.svg'
            alt='Nintendo logo'
            className='h-[120px] w-auto'
          />
          <img
            src='https://motion-primitives.com/jquery_logo.svg'
            alt='Jquery logo'
            className='h-[120px] w-auto'
          />
          <img
            src='https://motion-primitives.com/prada_logo.svg'
            alt='Prada logo'
            className='h-[120px] w-auto'
          />
        </InfiniteSlider>
      </div>
    </section>
  )
}
export default FeaturedOn
