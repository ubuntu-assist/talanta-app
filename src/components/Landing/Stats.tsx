import map from '../../assets/images/map/map.png'
import mapBg from '../../assets/images/map/map-bg.png'

const Stats = () => {
  return (
    <div className='md:mt-14 mt-4 relative sm:flex items-center justify-center'>
      <img
        src={map}
        alt='world map'
        className='w-full xl:h-full h-96 object-cover object-fill sm:block hidden'
      />
      <img
        src={mapBg}
        alt='mobile'
        className='sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0'
      />

      {/* Stat at the top */}
      <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 top-0 xl:mt-10 sm:mt-6'>
        <p className='text-cyan-600 text-4xl text-accent font-medium lg:text-6xl'>
          +200
        </p>
        <p className='text-sm md:text-base font-semibold text-gray-900'>
          Hours of video content
        </p>
      </div>

      {/* Stat at the left */}
      <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12'>
        <p className='text-cyan-600 text-4xl text-accent font-medium lg:text-6xl'>
          +100K
        </p>
        <p className='text-sm md:text-base font-semibold text-gray-900'>
          Students
        </p>
      </div>

      {/* Stat at the bottom */}
      <div className='shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12'>
        <p className='text-cyan-600 text-4xl text-accent font-medium lg:text-6xl'>
          5
        </p>
        <p className='text-sm md:text-base font-semibold text-gray-900'>
          Instructors
        </p>
      </div>

      {/* Stat at the right */}
      <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24'>
        <p className='text-cyan-600 text-4xl text-accent font-medium lg:text-6xl'>
          50
        </p>
        <p className='text-sm md:text-base font-semibold text-gray-900'>
          Courses
        </p>
      </div>
    </div>
  )
}

export default Stats
