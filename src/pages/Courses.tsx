import { Link } from 'react-router-dom'
import CommingSoon from '../components/Courses/ComingSoon'
import { CallToAction, FeaturedOn } from '../components'

const Courses = () => {
  return (
    <>
      <CommingSoon />
      <div className='w-full px-2.5 md:py-24 py-12 !pt-12'>
        <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8'>
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='lg:w-1/2 w-full xl:hidden mr-4 flex items-center space-x-1.5 md:space-x-4'>
                <div className='flex flex-1  items-center space-x-3 py-3'>
                  <div className='flex w-full items-center border rounded-md px-3 py-2 text-sm md:py-2 placeholder:text-gray-light  bg-gray-border/10 space-x-2'>
                    <div className='text-gray-light '>
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M16.5642 16.5L13.6476 13.5833M15.7309 8.58333C15.7309 12.4954 12.5596 15.6667 8.64754 15.6667C4.73552 15.6667 1.56421 12.4954 1.56421 8.58333C1.56421 4.67132 4.73552 1.5 8.64754 1.5C12.5596 1.5 15.7309 4.67132 15.7309 8.58333Z'
                          stroke='currentColor'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </div>
                    <input
                      type='search'
                      className='outline-none w-full bg-transparent'
                      placeholder='Search'
                      value=''
                    />
                  </div>
                </div>
              </div>
              <div className='items-center space-x-3 py-3 flex'>
                <div className='flex items-center space-x-3'>
                  <button
                    type='button'
                    className='hidden xl:flex rounded p-2 hover:text-accent hover:bg-accent/10 duration-300 font-semibold space-x-4 items-center text-accent bg-cyan-200 text-black'
                  >
                    <p>Filters</p>
                    <div className='w-10 h-6 flex items-center rounded-full px-0.5 py-1 cursor-pointer duration-200 bg-white'>
                      <div className='bg-cyan-300 h-5 w-5 rounded-full shadow duration-200 ease-in-out translate-x-4'></div>
                    </div>
                  </button>
                </div>
                <div className='w-[1px] h-9 bg-gray-light/20 rounded-full hidden xl:flex'></div>
                <div className='border hidden xl:flex w-fit border-gray-border overflow-hidden rounded-lg divide-x'>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 hover:text-accent px-3 py-2 text-sm md:text-black text-accent bg-cyan-200 text-black hover:bg-accent/10'>
                    <div className=''>All COURSES</div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>NEW COURSES</div>
                    <div>
                      <div className='text-black'>
                        <div className='border flex items-center justify-center text-nowrap bg-purple-200 rounded-full border-gray-border/30 font-medium w-6 h-6 text-sm'>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>COMING SOON</div>
                    <div>
                      <div className='text-black'>
                        <div className='border flex items-center justify-center text-nowrap bg-purple-200 rounded-full border-gray-border/30 font-medium w-6 h-6 text-sm'>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>Solidity</div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>Foundry</div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>Hardhat</div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>Docker</div>
                  </button>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                    <div className=''>Rust</div>
                  </button>
                </div>
              </div>
              <div className='relative block xl:hidden'>
                <div>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-white border border-gray-border button_style px-3 py-2 text-sm md:text-black'>
                    <div>
                      <p className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5 10H15M2.5 5H17.5M7.5 15H12.5'
                            stroke='currentColor'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </p>
                    </div>
                    <div className=''>
                      <p className=''>Filters</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='relative w-full flex md:space-x-3 xl:space-x-5'>
              <div className='hidden xl:block max-w-[250px] w-full border-r border-gray-border/50 pr-3'>
                <div className='sticky top-5 divide-y divide-gray-border/50 space-y-3 w-full'>
                  <div className='flex items-center space-x-2'>
                    <div className='flex w-full items-center space-x-3'>
                      <div className='flex w-full items-center border rounded-md px-3 py-2 text-sm md:py-2 placeholder:text-gray-light  bg-gray-border/10 space-x-2'>
                        <div className='text-gray-light '>
                          <svg
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M16.5642 16.5L13.6476 13.5833M15.7309 8.58333C15.7309 12.4954 12.5596 15.6667 8.64754 15.6667C4.73552 15.6667 1.56421 12.4954 1.56421 8.58333C1.56421 4.67132 4.73552 1.5 8.64754 1.5C12.5596 1.5 15.7309 4.67132 15.7309 8.58333Z'
                              stroke='currentColor'
                              strokeWidth='1.66667'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            ></path>
                          </svg>
                        </div>
                        <input
                          type='search'
                          className='outline-none w-full bg-transparent'
                          placeholder='Search'
                          value=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='space-y-3 py-3'>
                    <div className='flex items-center text-gray-light space-x-2 px-3'>
                      <span className='scale-90'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </span>
                      <h2 className=' text-sm font-semibold'>Instructors</h2>
                    </div>
                    <div>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <span className='rounded-full'>
                            <img
                              src='https://media.licdn.com/dms/image/v2/D4E03AQHquS421GVgWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715855612120?e=1733356800&v=beta&t=scbap3P97GRFO1w4GViMj19GkdJaf3NghbokcLOO20A'
                              alt='instructor img'
                              className='rounded-full'
                              width='30'
                              height='30'
                            />
                          </span>
                        </div>
                        <div className=''>Duclair Fopa</div>
                        <div>
                          <p>(28)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <span className='rounded-full'>
                            <img
                              src='https://media.licdn.com/dms/image/v2/D4E03AQHquS421GVgWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715855612120?e=1733356800&v=beta&t=scbap3P97GRFO1w4GViMj19GkdJaf3NghbokcLOO20A'
                              alt='instructor img'
                              className='rounded-full'
                              width='30'
                              height='30'
                            />
                          </span>
                        </div>
                        <div className=''>Stael Fouwa</div>
                        <div>
                          <p>(1)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <span className='rounded-full'>
                            <img
                              src='https://media.licdn.com/dms/image/v2/D4E03AQHquS421GVgWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715855612120?e=1733356800&v=beta&t=scbap3P97GRFO1w4GViMj19GkdJaf3NghbokcLOO20A'
                              alt='instructor img'
                              className='rounded-full'
                              width='30'
                              height='30'
                            />
                          </span>
                        </div>
                        <div className=''>Jamila</div>
                        <div>
                          <p>(1)</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='space-y-3 py-3'>
                    <div className='flex items-center text-gray-light space-x-2 px-3'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.1333 9L13.8004 7.66667L12.4666 9M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C10.2013 2 12.1257 3.18542 13.1697 4.95273M8 4.66667V8L10 9.33333'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                      <h2 className=' text-sm font-semibold'>Duration</h2>
                    </div>
                    <div>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>0-1 Hour</div>
                        <div>
                          <p>(2)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>1-3 Hours</div>
                        <div>
                          <p>(12)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>+3 Hours</div>
                        <div>
                          <p>(16)</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='space-y-3 py-3'>
                    <div className='flex items-center text-gray-light space-x-2 px-3 mb-3'>
                      <span>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5'
                        >
                          <path
                            d='M8 3L16 21M3 17L12 12M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </span>
                      <h2 className=' text-sm font-semibold'>Track</h2>
                    </div>
                    <div>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>Front End</div>
                        <div>
                          <p>(2)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>Back End</div>
                        <div>
                          <p>(21)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>Dev Ops</div>
                        <div>
                          <p>(2)</p>
                        </div>
                      </button>
                      <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                        <div>
                          <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                        </div>
                        <div className=''>Full Stack</div>
                        <div>
                          <p>(1)</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='space-y-3  py-3'>
                    <div className='flex items-center text-gray-light space-x-2 px-3 mb-3'>
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 17 17'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_1887_3557)'>
                            <path
                              d='M3.83347 9.70825H12.5906C13.2658 9.70825 13.6034 9.70825 13.8722 9.58236C14.109 9.47147 14.3079 9.29342 14.4443 9.07036C14.5991 8.81714 14.6363 8.48159 14.7109 7.81051L15.1009 4.30048C15.1237 4.09551 15.1351 3.99302 15.1021 3.91369C15.0732 3.84402 15.0214 3.78623 14.9554 3.74977C14.8802 3.70825 14.7771 3.70825 14.5708 3.70825H3.50013M1.83337 1.70825H2.66567C2.84208 1.70825 2.93029 1.70825 2.9993 1.7418C3.06005 1.77134 3.1104 1.81863 3.14367 1.87743C3.18145 1.94421 3.18696 2.03225 3.19796 2.20832L3.80212 11.8749C3.81312 12.0509 3.81863 12.139 3.85642 12.2057C3.88968 12.2645 3.94003 12.3118 4.00078 12.3414C4.06979 12.3749 4.158 12.3749 4.33441 12.3749H13.1667M5.50004 14.7083H5.50671M11.5 14.7083H11.5067M5.83337 14.7083C5.83337 14.8923 5.68414 15.0416 5.50004 15.0416C5.31595 15.0416 5.16671 14.8923 5.16671 14.7083C5.16671 14.5242 5.31595 14.3749 5.50004 14.3749C5.68414 14.3749 5.83337 14.5242 5.83337 14.7083ZM11.8334 14.7083C11.8334 14.8923 11.6841 15.0416 11.5 15.0416C11.3159 15.0416 11.1667 14.8923 11.1667 14.7083C11.1667 14.5242 11.3159 14.3749 11.5 14.3749C11.6841 14.3749 11.8334 14.5242 11.8334 14.7083Z'
                              stroke='currentColor'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1887_3557'>
                              <rect
                                width='16'
                                height='16'
                                fill='white'
                                transform='translate(0.5 0.375)'
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <h2 className=' text-sm font-semibold'>Price</h2>
                    </div>
                    <div>
                      <div>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>Paid</div>
                          <div>
                            <p>(18)</p>
                          </div>
                        </button>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>Free</div>
                          <div>
                            <p>(11)</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-3  py-3'>
                    <div className='flex items-center text-gray-light space-x-2 px-3 mb-3'>
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 17 17'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.8334 10.2915V8.28783C11.8334 8.16818 11.8334 8.10835 11.8152 8.05553C11.799 8.00883 11.7728 7.96628 11.7382 7.93099C11.6991 7.89107 11.6456 7.86431 11.5386 7.8108L8.50004 6.29155M3.16671 6.95821V11.496C3.16671 11.7439 3.16671 11.8679 3.20539 11.9764C3.23958 12.0724 3.29531 12.1592 3.36829 12.2303C3.45085 12.3107 3.56356 12.3623 3.78894 12.4656L8.05561 14.4212C8.2191 14.4961 8.30084 14.5336 8.386 14.5484C8.46146 14.5615 8.53862 14.5615 8.61408 14.5484C8.69924 14.5336 8.78098 14.4961 8.94447 14.4212L13.2111 12.4656C13.4365 12.3623 13.5492 12.3107 13.6318 12.2303C13.7048 12.1592 13.7605 12.0724 13.7947 11.9764C13.8334 11.8679 13.8334 11.7439 13.8334 11.496V6.95821M1.83337 6.29155L8.26153 3.07747C8.34898 3.03374 8.39271 3.01188 8.43857 3.00327C8.4792 2.99565 8.52088 2.99565 8.56151 3.00327C8.60737 3.01188 8.6511 3.03374 8.73855 3.07747L15.1667 6.29155L8.73855 9.50562C8.6511 9.54935 8.60737 9.57122 8.56151 9.57982C8.52088 9.58744 8.4792 9.58744 8.43857 9.57982C8.39271 9.57122 8.34898 9.54935 8.26153 9.50562L1.83337 6.29155Z'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </span>
                      <h2 className=' text-sm font-semibold'>Level</h2>
                    </div>
                    <div>
                      <div>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>All levels</div>
                          <div>
                            <p>(29)</p>
                          </div>
                        </button>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>Junior</div>
                          <div>
                            <p>(22)</p>
                          </div>
                        </button>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>Mid-level</div>
                          <div>
                            <p>(22)</p>
                          </div>
                        </button>
                        <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none rounded group space-x-3 text-gray-light hover:text-accent hover:bg-accent/5 px-3 py-2 text-sm md:text-black'>
                          <div>
                            <div className='flex items-center border rounded-[4px] justify-center w-4 h-4 duration-200 border-gray-border hover:bg-accent/10'></div>
                          </div>
                          <div className=''>Senior</div>
                          <div>
                            <p>(16)</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full duration-300'>
                <div className='w-full grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3 xl:gap-x-2'>
                  <div className='md:max-w-[450px] w-full'>
                    <Link
                      className='w-full'
                      target='_self'
                      to={`/courses/java-master-class`}
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Java Master Class card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/java-master-class.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            25:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Java Master Class
                        </h2>
                        <p className='text-sm text-black'>
                          Java Bootcamp curriculum to help you become a Java
                          Software Engineer
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $287
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-boot-master-class'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Spring Boot Master Class card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-boot-master-class.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-cyan-400 border-cyan-400 text-black rounded font-medium py-1 px-2.5 text-sm'>
                              <p>NEW</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            10:32:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Spring Boot Master Class
                        </h2>
                        <p className='text-sm text-black'>
                          API development, database integration, efficient JSON
                          handling, testing, and more
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $199.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/linux'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Linux and Shell Scripting card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/linux-shell-scripting.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            10:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Linux and Shell Scripting
                        </h2>
                        <p className='text-sm text-black'>
                          Proficient in file management, command-line expertise,
                          and system administration skills
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $149.98
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/microservices'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Microservices and Distributed Systems card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/microservices.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            10:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Microservices and Distributed Systems
                        </h2>
                        <p className='text-sm text-black'>
                          Build and deploy microservices, mastering modern
                          software architecture techniques.
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $199.97
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-boot'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Spring Boot for Beginners card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-boot.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            02:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Spring Boot for Beginners
                        </h2>
                        <p className='text-sm text-black'>
                          Spring Boot for beginners with Web MVC, JSON, and
                          database connectivity
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-data-jpa'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Spring Data JPA card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-data-jpa.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:30:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Spring Data JPA
                        </h2>
                        <p className='text-sm text-black'>
                          Master database management, advanced querying, and
                          expert data handling with ease
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $49.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/java'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Java for Beginners card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/java.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            04:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Java for Beginners
                        </h2>
                        <p className='text-sm text-black'>
                          Beginner-friendly Java course for essential
                          programming skills and application developmen
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-boot-graphql'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Build APIs with GraphQL and Spring Boot card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-boot-graphql.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-cyan-400 border-cyan-400 text-white rounded font-medium py-1 px-2.5 text-sm'>
                              <p>COMING SOON</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:20:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Build APIs with GraphQL and Spring Boot
                        </h2>
                        <p className='text-sm text-black'>
                          From Schema to Endpoint, Mastering Modern API
                          Development for Scalable and Efficient Web
                          Applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/advanced-databases'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Advanced Databases card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/advanced-databases.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Advanced Databases
                        </h2>
                        <p className='text-sm text-black'>
                          Advanced database management with SQL, design,
                          integrity, and practical applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $34.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/database-design'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Database Design &amp; Implementation card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/database-design.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            02:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Database Design &amp;Implementation
                        </h2>
                        <p className='text-sm text-black'>
                          Skills in database design and SQL for efficient,
                          robust backend development
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $19.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/docker'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Docker for DevOps Engineers card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/docker.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:10:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Docker for DevOps Engineers
                        </h2>
                        <p className='text-sm text-black'>
                          Learn Docker essentials to enhance DevOps processes
                          and software management
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $49.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/functional-programming'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Functional Programming &amp; Java Streams card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/functional-programming.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            05:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Functional Programming &amp;Java Streams
                        </h2>
                        <p className='text-sm text-black'>
                          Explore Java functional programming, from basics to
                          advanced stream operations
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $29.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/git-github'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Git and Github card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/git-github.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-cyan-400 border-cyan-400 text-white rounded font-medium py-1 px-2.5 text-sm'>
                              <p>COMING SOON</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            14:71:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Git and Github
                        </h2>
                        <p className='text-sm text-black'>
                          Master version control with Git and GitHub for
                          streamlined coding and collaboration
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $99.98
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/intellij'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='IntelliJ IDEA Developer Guide card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/intellij.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-cyan-400 border-cyan-400 text-black rounded font-medium py-1 px-2.5 text-sm'>
                              <p>NEW</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            10:64:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          IntelliJ IDEA Developer Guide
                        </h2>
                        <p className='text-sm text-black'>
                          Maximize IDE efficiency with IntelliJ IDEA for diverse
                          programming applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $98.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/Java-generics'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Java Generics card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/1wzZfy2iSWuGsCMIMo2i'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:10:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Java Generics
                        </h2>
                        <p className='text-sm text-black'>
                          Comprehensive guide to Java Generics for robust,
                          type-safe code and algorithms
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $19.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/Javascript'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Javascript for Beginners card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/javascript.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            02:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Javascript for Beginners
                        </h2>
                        <p className='text-sm text-black'>
                          Learn JavaScript essentials for creating dynamic,
                          interactive web applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/javascript-mastery'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Javascript Mastery card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/javascript-mastery.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            06:30:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Javascript Mastery
                        </h2>
                        <p className='text-sm text-black'>
                          Advanced JavaScript training for web development,
                          client and server-side applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $39.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/javascript-testing'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Javascript Testing card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/jest.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:30:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Javascript Testing
                        </h2>
                        <p className='text-sm text-black'>
                          Master JavaScript testing using Jest for reliable,
                          robust web applications
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $29.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/kotlin'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Kotlin for Beginners card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/kotlin.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            05:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Kotlin for Beginners
                        </h2>
                        <p className='text-sm text-black'>
                          Kotlin fundamentals for mobile, game, and web
                          development
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/kubernetes'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Mastering Kubernetes card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/kubernetes.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            07:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Mastering Kubernetes
                        </h2>
                        <p className='text-sm text-black'>
                          In-depth Kubernetes training for container
                          orchestration in modern application development
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $74.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/mongodb'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='MongoDB card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/mongodb.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          MongoDB
                        </h2>
                        <p className='text-sm text-black'>
                          Comprehensive MongoDB course for NoSQL database
                          mastery in data management
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $34.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/pycharm'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='PyCharm card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/pycharm.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:30:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          PyCharm
                        </h2>
                        <p className='text-sm text-black'>
                          Maximize coding productivity and streamline your
                          Python development workflow
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/python'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Getting Started with Python card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/python.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            04:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Getting Started with Python
                        </h2>
                        <p className='text-sm text-black'>
                          Learn to write clean, efficient, and effective code,
                          solve problems and automate tasks
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a className='w-full' target='_self' href='/courses/sql'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Relational Database and SQL Essentials card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/postgres.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            03:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Relational Database and SQL Essentials
                        </h2>
                        <p className='text-sm text-black'>
                          Master table design, data management, and advanced
                          database operations
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/software-testing'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Software Testing card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/IMxH3U7QLCkIu6cMCbS6'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            04:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Software Testing
                        </h2>
                        <p className='text-sm text-black'>
                          Software testing expertise, from fundamentals to
                          advanced test-driven development
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          $34.99
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-boot-react-aws-s3'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Spring Boot S3 File Uploads with React card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-boot-s3.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            02:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Spring Boot S3 File Uploads with React
                        </h2>
                        <p className='text-sm text-black'>
                          Learn Spring Boot, React, and S3 integration for
                          efficient file uploads
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='md:max-w-[450px] w-full'>
                    <a
                      className='w-full'
                      target='_self'
                      href='/courses/spring-data-mongodb'
                    >
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-gray-50'>
                          <img
                            alt='Spring Data MongoDB card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/spring-data-mongo.webp'
                          />
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg  font-semibold duration-200 truncate'>
                          Spring Data MongoDB
                        </h2>
                        <p className='text-sm text-black'>
                          Explore Spring Data MongoDB for database interactions
                          and Restful API development
                        </p>
                        <p className='text-sm lg:text-black font-semibold text-accent'>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedOn />
      <CallToAction />
    </>
  )
}
export default Courses
