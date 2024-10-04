import ubaLogo from '../../assets/images/universities/uba.png'
import iucLogo from '../../assets/images/universities/iuc.jpg'
import iugLogo from '../../assets/images/universities/iug.png'
import ubueaLogo from '../../assets/images/universities/ubuea.jpeg'
import ictLogo from '../../assets/images/universities/ict-university.jpeg'
import ungaLogo from '../../assets/images/universities/ungaoundere.png'
import udsLogo from '../../assets/images/universities/uds.jpg'
import enspyLogo from '../../assets/images/universities/enspy.png'

const FeaturedUniversities = () => {
  return (
    <div className='w-full px-2.5 md:py-24 py-12'>
      <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8'>
        <div className='py-6 space-y-4 md:space-y-6 text-center'>
          <div className=''>
            <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
              Universities &amp; Engineering Schools
            </p>
            <h2 className='text-xl md:text-4xl font-semibold mb-3 text-gray-900'>
              Explore Where Our Students Study
              {/* <!-- --> */}
            </h2>
            <p className='md:text-lg max-w-2xl text-gray-700 mx-auto'>
              Discover prestigious universities and bootcamps where our students
              have pursued their education and training.
            </p>
          </div>
        </div>
        <div className='grid place-items-center w-full grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16 md:max-w-[1000px] mx-auto'>
          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_college'
              loading='lazy'
              width='923'
              height='703'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={udsLogo}
            />
          </div>
          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_college'
              loading='lazy'
              width='923'
              height='703'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={ubaLogo}
            />
          </div>
          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_qm'
              loading='lazy'
              width='600'
              height='314'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={ubueaLogo}
            />
          </div>
          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_uci'
              loading='lazy'
              width='1207'
              height='188'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={iucLogo}
            />
          </div>
          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_harvard'
              loading='lazy'
              width='180'
              height='140'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={iugLogo}
            />
          </div>

          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_harvard'
              loading='lazy'
              width='180'
              height='140'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={enspyLogo}
            />
          </div>

          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_harvard'
              loading='lazy'
              width='180'
              height='140'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={ungaLogo}
            />
          </div>

          <div className='relative w-[90px] md:w-[130px] lg:w-[200px]'>
            <img
              alt='partner_harvard'
              loading='lazy'
              width='180'
              height='140'
              decoding='async'
              data-nimg='1'
              className=''
              style={{ color: 'transparent' }}
              src={ictLogo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeaturedUniversities
