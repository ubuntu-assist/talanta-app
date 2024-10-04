import fullStackProfessional from '../../assets/images/courses/full-stack-professional.webp'
import gitGithub from '../../assets/images/courses/git-github.webp'
import intellij from '../../assets/images/courses/intellij.webp'
import javaMasterClass from '../../assets/images/courses/java-master-class.webp'
import springBootMasterClass from '../../assets/images/courses/spring-boot-master-class.webp'
import springBoot from '../../assets/images/courses/spring-boot.webp'

export const TopCourses = () => {
  return (
    <div className='w-full px-2.5 md:py-24 py-12'>
      <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8'>
        <div className='py-6 space-y-4 md:space-y-6'>
          <div className=''>
            <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
              Courses
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
          <div className='w-full md:max-w-[300px]'>
            <a href='/courses'>
              <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-accent text-white bg-cyan-600 rounded-lg justify-center text-sm md:text-base py-2 px-4 md:py-3 md:px-5'>
                <div className=''>View all Premium Courses</div>
              </button>
            </a>
          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full'>
          <div>
            <a
              className='w-full'
              target='_self'
              href='https://www.amigoscode.com/courses/full-stack-professional'
            >
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='Full Stack Professional card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={fullStackProfessional}
                  />
                  <div className='absolute  top-1.5 right-1.5'>
                    <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] border-gray-500 rounded font-medium py-1 px-2.5 text-sm text-white'>
                      <p>BEST SELLER</p>
                    </div>
                  </div>
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    55:00:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  Full Stack Professional
                </h2>
                <p className='text-sm text-gray-700'>
                  Build, Test, and Automate Full-Stack Web Applications Like a
                  Professional
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  $478.98
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              className='w-full'
              target='_self'
              href='/courses/java-master-className'
            >
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='Java Master className card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={javaMasterClass}
                  />
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    25:00:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  Java Master className
                </h2>
                <p className='text-sm text-gray-700'>
                  Java Bootcamp curriculum to help you become a Java Software
                  Engineer
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  $287
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              className='w-full'
              target='_self'
              href='/courses/spring-boot-master-className'
            >
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='Spring Boot Master className card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={springBootMasterClass}
                  />
                  <div className='absolute  top-1.5 right-1.5'>
                    <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] border-gray-500 rounded font-medium py-1 px-2.5 text-sm text-white'>
                      <p>NEW</p>
                    </div>
                  </div>
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    10:32:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  Spring Boot Master className
                </h2>
                <p className='text-sm text-gray-700'>
                  API development, database integration, efficient JSON
                  handling, testing, and more
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  $199.99
                </p>
              </div>
            </a>
          </div>
          <div>
            <a className='w-full' target='_self' href='/courses/spring-boot'>
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='Spring Boot for Beginners card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={springBoot}
                  />
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    02:00:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  Spring Boot for Beginners
                </h2>
                <p className='text-sm text-gray-700'>
                  Spring Boot for beginners with Web MVC, JSON, and database
                  connectivity
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  Free
                </p>
              </div>
            </a>
          </div>
          <div>
            <a className='w-full' target='_self' href='/courses/git-github'>
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='Git and Github card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={gitGithub}
                  />
                  <div className='absolute  top-1.5 right-1.5'>
                    <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] border-gray-500 rounded font-medium py-1 px-2.5 text-sm'>
                      <p>COMING SOON</p>
                    </div>
                  </div>
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    14:71:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  Git and Github
                </h2>
                <p className='text-sm text-gray-700'>
                  Master version control with Git and GitHub for streamlined
                  coding and collaboration
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  $99.98
                </p>
              </div>
            </a>
          </div>
          <div>
            <a className='w-full' target='_self' href='/courses/intellij'>
              <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50 xl:h-[240px]'>
                  <img
                    alt='IntelliJ IDEA Developer Guide card'
                    loading='lazy'
                    width='100'
                    height='100'
                    decoding='async'
                    data-nimg='1'
                    className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                    style={{ color: 'transparent' }}
                    src={intellij}
                  />
                  <div className='absolute  top-1.5 right-1.5'>
                    <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] border-gray-500 rounded font-medium py-1 px-2.5 text-sm text-white'>
                      <p>NEW</p>
                    </div>
                  </div>
                  <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                    10:64:00
                  </time>
                </div>
                <h2 className='text-base md:text-lg text-gray-900 font-semibold duration-200 truncate'>
                  IntelliJ IDEA Developer Guide
                </h2>
                <p className='text-sm text-gray-700'>
                  Maximize IDE efficiency with IntelliJ IDEA for diverse
                  programming applications
                </p>
                <p className='text-sm lg:text-base font-semibold text-accent text-cyan-500'>
                  $98.99
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
