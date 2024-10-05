const CourseContent = () => {
  return (
    <div>
      <div className='mt-10 bg-white py-2'>
        <nav className='flex flex-wrap gap-4'>
          <a
            href='#'
            className='inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-cyan-600 hover:text-cyan-600'
          >
            {' '}
            Announcements{' '}
          </a>

          <a
            href='#'
            className='inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-cyan-600 hover:text-cyan-600'
          >
            {' '}
            FAQs{' '}
          </a>

          <a
            href='#'
            className='inline-flex whitespace-nowrap border-b-2 border-transparent border-b-cyan-600 py-2 px-3 text-sm font-semibold text-cyan-600 transition-all duration-200 ease-in-out'
          >
            {' '}
            Curriculum{' '}
          </a>

          <a
            href='#'
            className='inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-cyan-600 hover:text-cyan-600'
          >
            {' '}
            Reviews{' '}
          </a>

          <a
            href='#'
            className='inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-cyan-600 hover:text-cyan-600'
          >
            {' '}
            Suppliers{' '}
          </a>
        </nav>
      </div>

      <ul className='mt-2 space-y-4'>
        <li className='text-left'>
          <label
            htmlFor='accordion-2'
            className='relative flex flex-col rounded-md border border-gray-100 shadow-md'
          >
            <input className='peer hidden' type='checkbox' id='accordion-2' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
            <div className='relative ml-4 cursor-pointer select-none items-center py-4 pr-2'>
              <h3 className='text-base font-bold text-gray-600 lg:text-base'>
                I care about javascript
              </h3>
            </div>
            <div className='max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96'>
              <ul className='space-y-1 font-semibold text-gray-600 mb-6'>
                <li className='flex px-2 sm:px-6 py-2.5 hover:bg-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='mr-2 w-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Something to Ponder{' '}
                  <span className='ml-auto text-sm'> 23 min </span>
                </li>
                <li className='flex px-2 sm:px-6 py-2.5 hover:bg-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='mr-2 w-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Tables <span className='ml-auto text-sm'> 23 min </span>
                </li>
                <li className='flex px-2 sm:px-6 py-2.5 hover:bg-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='mr-2 w-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  HTML Entities{' '}
                  <span className='ml-auto text-sm'> 23 min </span>
                </li>
                <li className='flex px-2 sm:px-6 py-2.5 hover:bg-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='mr-2 w-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  HTML Iframes{' '}
                  <a
                    href='#trailer-modal'
                    className='ml-2 rounded-full border bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-500'
                  >
                    {' '}
                    Preview{' '}
                  </a>
                  <span className='ml-auto text-sm'> 23 min </span>
                </li>
                <li className='flex px-2 sm:px-6 py-2.5 hover:bg-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='mr-2 w-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Some important things
                  <span className='ml-auto text-sm'> 23 min </span>
                </li>
              </ul>
            </div>
          </label>
        </li>
        <li className='text-left'>
          <label
            htmlFor='accordion-3'
            className='relative flex flex-col rounded-md border border-gray-100 shadow-md'
          >
            <input className='peer hidden' type='checkbox' id='accordion-3' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
            <div className='relative ml-4 cursor-pointer select-none items-center py-4 pr-2'>
              <h3 className='text-base font-bold text-gray-600 lg:text-base'>
                Who made javascript
              </h3>
            </div>
            <div className='max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96'>
              <ul className='space-y-1 font-semibold text-gray-600 mb-6'>
                {/* <!-- Add stuff here --> */}
              </ul>
            </div>
          </label>
        </li>
        <li className='text-left'>
          <label
            htmlFor='accordion-4'
            className='relative flex flex-col rounded-md border border-gray-100 shadow-md'
          >
            <input className='peer hidden' type='checkbox' id='accordion-4' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
            <div className='relative ml-4 cursor-pointer select-none items-center py-4 pr-2'>
              <h3 className='text-base font-bold text-gray-600 lg:text-base'>
                Why they made javascript
              </h3>
            </div>
            <div className='max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96'>
              <ul className='space-y-1 font-semibold text-gray-600 mb-6'>
                {/* <!-- Add stuff here --> */}
              </ul>
            </div>
          </label>
        </li>
      </ul>
    </div>
  )
}
export default CourseContent
