import { Dialog, Transition, DialogPanel } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useEffect, useRef, useState, useTransition } from 'react'
import logo from '../assets/images/app/talanta.png'
import { Link } from 'react-router-dom'
import EmptyStates from '../designSystem/ui/EmptyStates'
import { LanguageSelectionModal } from '../designSystem/ui/AnimatedModal/usage'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const resultsRefs = useRef<(HTMLLIElement | null)[]>([])
  const [tab, setTab] = useState('courses')
  const [, startTransition] = useTransition()

  function switchTab(tab: string) {
    startTransition(() => {
      setTab(tab)
    })
  }

  function setStyles(thisTab: string) {
    return {
      color: tab === thisTab ? 'dodgerblue' : 'black',
    }
  }

  const isAppleOs = () => {
    const ua = navigator.userAgent
    return /(Mac|iPhone|iPad|iPod)/i.test(ua)
  }

  const keyboardShortcut = isAppleOs() ? '⌘M' : 'Ctrl M'

  const navigateResults = (event: React.KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        if (selectedIndex === 0) {
          setSelectedIndex(results.length - 1)
        } else {
          setSelectedIndex(selectedIndex - 1)
        }
        break
      case 'ArrowDown':
        if (selectedIndex === results.length - 1) {
          setSelectedIndex(0)
        } else {
          setSelectedIndex(selectedIndex + 1)
        }
        break
    }

    resultsRefs.current[selectedIndex]?.scrollIntoView(false)
  }

  const search = async (term: string) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${term}`
    )
    setResults(data)
    resultsRefs.current = []
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results[selectedIndex]) {
      window.location.href = 'https://www.amigoscode.com/courses'
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (isOpen) return

    if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    search('electronics')

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <>
      <nav className='flex bg-white text-gray-700 items-center justify-between space-x-3 md:space-x-10 lg:space-x-20 w-full lg:max-w-[1400px] mx-auto px-2.5 py-3'>
        <div className='flex items-center space-x-12'>
          <Link aria-label='Home page' to='/'>
            <div>
              <img width='200' height='50' alt='Talantachain Logo' src={logo} />
            </div>
          </Link>
          <div className='hidden lg:flex items-center space-x-8'>
            <div>
              <button
                className='font-medium text-gray-tertiary hover:text-black duration-150'
                onClick={() => switchTab('courses')}
                style={setStyles('courses')}
              >
                <Link to='/courses'>Courses</Link>
              </button>
            </div>

            <div>
              <button
                className='font-medium text-gray-tertiary hover:text-black duration-150'
                onClick={() => switchTab('community')}
                style={setStyles('community')}
              >
                <Link to='/community'>Community</Link>
              </button>
            </div>
            <div>
              <button
                className='font-medium text-gray-tertiary hover:text-black duration-150'
                onClick={() => switchTab('blog')}
                style={setStyles('blog')}
              >
                <Link to='/blog'>Blog</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-5 md:space-x-10'>
          <div className='flex items-center space-x-5'>
            <div className='xl:min-w-[250px]'>
              <div className='relative flex w-full justify-end duration-150'>
                <button aria-label='search-button' className='flex xl:hidden'>
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
                </button>
                <div className='xl:relative xl:flex w-full hidden'>
                  <button
                    className='flex w-full items-center border border-gray-light/5 lg:rounded-md pl-2 pr-1 py-1 flex-1 text-gray-light font-medium bg-gray-50 justify-between space-x-10 hover:shadow-lg outline-none'
                    onClick={() => setIsOpen(true)}
                  >
                    <div className='flex items-center space-x-3'>
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
                    <div className='px-1.5 py-1 rounded-md border border-gray-light/5 bg-white'>
                      <p className='text-gray-primary font-medium'>
                        {keyboardShortcut}
                      </p>
                    </div>
                  </button>
                  <Transition show={isOpen} as={Fragment}>
                    <Dialog
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                      className='fixed inset-0 z-50 flex justify-center items-start'
                      onKeyDown={navigateResults}
                    >
                      {/* Overlay Transition */}
                      <Transition
                        enter='duration-200 ease-out'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='duration-200 ease-in'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        show={isOpen}
                      >
                        <div
                          className='fixed inset-0 h-full w-full bg-black bg-opacity-50'
                          aria-hidden='true'
                        />
                      </Transition>

                      {/* Dialog Content Transition */}
                      <DialogPanel>
                        <Transition
                          enter='duration-200 ease-out'
                          enterFrom='opacity-0 scale-95'
                          enterTo='opacity-100 scale-100'
                          leave='duration-200 ease-in'
                          leaveFrom='opacity-100 scale-100'
                          leaveTo='opacity-0 scale-95'
                          show={isOpen}
                        >
                          <div className='w-full max-w-3xl bg-white text-black rounded-lg mx-4 max-h-[70vh] mt-[10vh] relative overflow-hidden flex flex-col'>
                            <form
                              className='relative flex items-center'
                              onSubmit={handleSubmit}
                            >
                              <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
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
                                onInput={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) => search(e.target.value)}
                                type='text'
                                placeholder='Quick Search...'
                                className='w-full py-4 pl-12 border-b border-gray-100 outline-none placeholder-gray-400'
                              />

                              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                <button
                                  type='button'
                                  className='flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs'
                                  onClick={() => setIsOpen(false)}
                                >
                                  Esc
                                </button>
                              </div>
                            </form>

                            {results.length > 0 && (
                              <div className='overflow-auto'>
                                <p className='md:text-md max-w-2xl text-gray-500 px-4'>
                                  Popular Courses
                                </p>
                                <ul className='divide-y divide-gray-100'>
                                  {results.map(
                                    (
                                      item: {
                                        title: string
                                        category: string
                                        image: string
                                        id: number
                                      },
                                      index: number
                                    ) => (
                                      <li
                                        ref={(el) => {
                                          resultsRefs.current[index] = el
                                        }}
                                        key={item.id}
                                        className={`flex items-center px-4 py-2.5 relative ${
                                          selectedIndex === index
                                            ? 'bg-gray-100'
                                            : ''
                                        }`}
                                        onMouseMove={() =>
                                          setSelectedIndex(index)
                                        }
                                        onClick={handleSubmit}
                                      >
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          className='w-10 h-10 rounded-lg object-cover border-white border-2 shrink-0 bg-gray-200'
                                        />
                                        <a href=''>
                                          <span className='absolute inset-0'></span>
                                        </a>
                                        <div className='ml-3'>
                                          <div className='font-medium text-sm text-gray-600'>
                                            {item.title}
                                          </div>
                                          <div className='text-xs text-gray-600 mt-1'>
                                            {item.category}
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            {results.length === 0 && (
                              <p className='p-10 text-lg text-center text-gray-400'>
                                <EmptyStates />
                              </p>
                            )}
                          </div>
                        </Transition>
                      </DialogPanel>
                    </Dialog>
                  </Transition>
                </div>
              </div>
            </div>
            <div className='hidden lg:block w-0.5 h-8 bg-gray-700/10 rounded-full'></div>
            <LanguageSelectionModal />
            <div className='hidden lg:block w-0.5 h-8 bg-gray-700/10 rounded-full'></div>
            <div className='hidden lg:flex'>
              <div className='flex space-x-3'>
                <Link to='/login'>
                  <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-accent text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg px-3 py-2 text-sm md:text-base'>
                    <div className=''>Log in</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='relative flex lg:hidden'>
            <button>
              <div aria-label='Open Menu'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  width='24'
                  height='24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className='fixed z-40 -top-20 opacity-0 w-full duration-200'>
        <nav className='flex bg-white items-center justify-between space-x-3 md:space-x-10 lg:space-x-20 w-full lg:max-w-[1400px] mx-auto px-2.5 py-3'>
          <div className='flex items-center space-x-12'>
            <a aria-label='Home page' href='https://amigoscode.com'>
              <div>
                <svg
                  width='148'
                  height='28'
                  viewBox='0 0 148 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M56.427 9.83905C55.9193 9.50331 55.2482 9.33545 54.4138 9.33545C53.5793 9.33545 52.8712 9.53226 52.2702 9.9278C51.7216 10.2809 51.2917 10.7556 50.9766 11.344C50.9708 11.3267 50.9649 11.3074 50.9571 11.2881C50.7432 10.69 50.3872 10.2153 49.8853 9.86799C49.3854 9.51296 48.7066 9.33545 47.8526 9.33545C46.9987 9.33545 46.3081 9.53612 45.6993 9.93745C45.3064 10.196 44.9737 10.5144 44.6975 10.8925V9.89886C44.6975 9.68662 44.5224 9.51296 44.3085 9.51296H42.4528C42.2388 9.51296 42.0637 9.68662 42.0637 9.89886V19.9882H44.6975V14.4351C44.6975 14.0801 44.7384 13.7347 44.8181 13.399C44.8979 13.0574 45.0243 12.7545 45.1994 12.4921C45.3803 12.222 45.6059 12.0097 45.8802 11.8515C46.1603 11.6875 46.5007 11.6045 46.9014 11.6045C47.3021 11.6045 47.6386 11.6798 47.8721 11.8322C48.1133 11.9769 48.2883 12.1679 48.4031 12.4033C48.5179 12.6387 48.5898 12.8992 48.6229 13.1829C48.656 13.4588 48.6735 13.725 48.6735 13.9817V19.9882H51.2878V14.3463C51.2878 14.0183 51.3248 13.6884 51.3987 13.3604C51.4785 13.0324 51.603 12.7352 51.7683 12.4728C51.9356 12.2104 52.1554 12.0001 52.4297 11.8419C52.7098 11.6836 53.0541 11.6045 53.4606 11.6045C53.8672 11.6045 54.2017 11.6759 54.4429 11.8206C54.6822 11.9596 54.8592 12.1429 54.974 12.3725C55.0868 12.5963 55.1607 12.849 55.1938 13.1327C55.2268 13.4086 55.2444 13.6845 55.2444 13.9604V19.9882H57.8781V13.2021C57.8781 12.4593 57.7614 11.7975 57.528 11.2186C57.3004 10.634 56.9347 10.1728 56.427 9.83712V9.83905Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M59.1799 19.9903H61.7826V9.89908C61.7826 9.68684 61.6075 9.51318 61.3936 9.51318H59.569C59.355 9.51318 59.1799 9.68684 59.1799 9.89908V19.9884V19.9903Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M61.3934 5H59.5688C59.354 5 59.1798 5.17277 59.1798 5.3859V7.18997C59.1798 7.4031 59.354 7.57587 59.5688 7.57587H61.3934C61.6083 7.57587 61.7825 7.4031 61.7825 7.18997V5.3859C61.7825 5.17277 61.6083 5 61.3934 5Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M86.4435 11.9403C85.963 11.1241 85.2958 10.4874 84.4419 10.0262C83.5879 9.56699 82.5998 9.33545 81.4774 9.33545C80.355 9.33545 79.3688 9.56699 78.5129 10.0262C77.659 10.4874 76.9879 11.1241 76.5016 11.9403C76.0211 12.7487 75.7799 13.6864 75.7799 14.7515C75.7799 15.8166 76.0211 16.7505 76.5016 17.5724C76.9879 18.3944 77.659 19.0389 78.5129 19.5058C79.3688 19.9669 80.3569 20.1965 81.4774 20.1965C82.5978 20.1965 83.5879 19.9669 84.4419 19.5058C85.2958 19.0389 85.963 18.3944 86.4435 17.5724C86.9317 16.7505 87.1748 15.8108 87.1748 14.7515C87.1748 13.6922 86.9317 12.7487 86.4435 11.9403ZM84.1306 16.5074C83.8777 16.9994 83.5237 17.3853 83.0705 17.6612C82.6153 17.9371 82.0843 18.076 81.4774 18.076C80.8705 18.076 80.3453 17.9371 79.8862 17.6612C79.431 17.3853 79.077 16.9994 78.8241 16.5074C78.5713 16.0076 78.4429 15.423 78.4429 14.7515C78.4429 14.0801 78.5713 13.5012 78.8241 13.015C79.077 12.523 79.431 12.1409 79.8862 11.8708C80.3453 11.6007 80.8763 11.4675 81.4774 11.4675C82.0784 11.4675 82.6153 11.6007 83.0705 11.8708C83.5237 12.1409 83.8777 12.523 84.1306 13.015C84.3854 13.5012 84.5119 14.0801 84.5119 14.7515C84.5119 15.423 84.3854 16.0076 84.1306 16.5074Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M73.7473 11.9403C73.2668 11.1241 72.5996 10.4874 71.7457 10.0262C70.8898 9.56699 69.9016 9.33545 68.7812 9.33545C67.6608 9.33545 66.6726 9.56699 65.8167 10.0262C64.9628 10.4874 64.2917 11.1241 63.8054 11.9403C63.3249 12.7487 63.0837 13.6864 63.0837 14.7515C63.0837 15.8166 63.3249 16.7505 63.8054 17.5724C64.2917 18.3944 64.9628 19.0389 65.8167 19.5058C66.6726 19.9669 67.6588 20.1965 68.7812 20.1965C69.9036 20.1965 70.8898 19.9669 71.7457 19.5058C72.5996 19.0389 73.2668 18.3944 73.7473 17.5724C74.2355 16.7505 74.4787 15.8108 74.4787 14.7515C74.4787 13.6922 74.2355 12.7487 73.7473 11.9403ZM71.4345 16.5074C71.1816 16.9994 70.8276 17.3853 70.3724 17.6612C69.9191 17.9371 69.3881 18.076 68.7812 18.076C68.1743 18.076 67.6491 17.9371 67.1881 17.6612C66.7349 17.3853 66.3808 16.9994 66.128 16.5074C65.8731 16.0076 65.7467 15.423 65.7467 14.7515C65.7467 14.0801 65.8731 13.5012 66.128 13.015C66.3808 12.523 66.7349 12.1409 67.1881 11.8708C67.6491 11.6007 68.1801 11.4675 68.7812 11.4675C69.3823 11.4675 69.9191 11.6007 70.3724 11.8708C70.8276 12.1409 71.1816 12.523 71.4345 13.015C71.6873 13.5012 71.8157 14.0801 71.8157 14.7515C71.8157 15.423 71.6873 16.0076 71.4345 16.5074Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M74.0238 22.5718H72.2245C71.9988 22.5718 71.814 22.7435 71.7946 22.9673C71.7499 23.4516 71.6293 23.8838 71.4347 24.2678C71.1819 24.7598 70.8278 25.1457 70.3727 25.4216C69.9194 25.6995 69.3903 25.8365 68.7815 25.8365C68.1726 25.8365 67.6494 25.6995 67.1903 25.4216C66.7351 25.1457 66.3811 24.7598 66.1282 24.2678C65.9337 23.8838 65.8131 23.4516 65.7684 22.9673C65.7489 22.7435 65.5641 22.5718 65.3385 22.5718H63.5372C63.2863 22.5718 63.084 22.7821 63.1035 23.0291C63.1696 23.88 63.403 24.6479 63.8037 25.3329C64.292 26.1548 64.9631 26.7993 65.819 27.2662C66.671 27.7274 67.6611 27.957 68.7815 27.957C69.9019 27.957 70.8901 27.7274 71.744 27.2662C72.5999 26.7993 73.2671 26.1548 73.7476 25.3329C74.1541 24.6479 74.3914 23.88 74.4576 23.0291C74.477 22.7821 74.2747 22.5718 74.0238 22.5718Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M96.6671 14.6628C96.2528 14.4332 95.7957 14.2479 95.2958 14.1109C94.8017 13.9739 94.3115 13.864 93.8233 13.7849C93.3097 13.7 92.8546 13.6035 92.4616 13.4993C92.0687 13.3874 91.7614 13.2504 91.5396 13.0844C91.3198 12.9204 91.2089 12.7063 91.2089 12.4439C91.2089 12.1679 91.3159 11.9538 91.5299 11.8033C91.7439 11.645 92.0103 11.537 92.3313 11.4772C92.6523 11.4116 92.9615 11.3788 93.2631 11.3788C93.6035 11.3788 93.9264 11.4251 94.2337 11.5177C94.541 11.6103 94.792 11.7512 94.9845 11.9422C95.1771 12.1332 95.2744 12.3802 95.2744 12.6812V12.8085H97.8771V12.6503C97.8771 11.9538 97.6611 11.3576 97.2254 10.8655C96.7975 10.3716 96.2334 9.99341 95.5331 9.73099C94.8328 9.46858 94.0742 9.33545 93.2592 9.33545C92.4441 9.33545 91.633 9.45701 90.9269 9.70012C90.2266 9.94324 89.6644 10.3021 89.2443 10.7748C88.83 11.2418 88.6238 11.8206 88.6238 12.5114C88.6238 13.0304 88.7444 13.4723 88.9836 13.8331C89.2307 14.1939 89.5536 14.4968 89.9543 14.74C90.3608 14.9831 90.8121 15.1779 91.3062 15.3227C91.8003 15.4674 92.3002 15.5831 92.8079 15.668C93.7299 15.8127 94.4029 15.9729 94.8309 16.1504C95.2647 16.3279 95.4825 16.6231 95.4825 17.038C95.4825 17.2946 95.3794 17.5049 95.1713 17.6689C94.9709 17.8329 94.7044 17.9545 94.3699 18.0336C94.0431 18.1127 93.6929 18.1513 93.3175 18.1513C92.6309 18.1513 92.0862 18.0452 91.6855 17.8349C91.2926 17.6187 91.0942 17.2965 91.0942 16.8682V16.6907H88.4701V16.9183C88.4701 17.4567 88.5965 17.9352 88.8513 18.3481C89.112 18.7552 89.4621 19.0987 89.9037 19.3746C90.3511 19.6505 90.8588 19.857 91.4248 19.9959C91.9987 20.1348 92.6036 20.2023 93.2378 20.2023C93.8719 20.2023 94.4457 20.1406 95.0196 20.0152C95.5934 19.8898 96.1069 19.6968 96.5621 19.4325C97.0231 19.1623 97.3869 18.8247 97.6533 18.4156C97.9198 18.0085 98.0541 17.5146 98.0541 16.9357C98.0541 16.3897 97.9237 15.9324 97.6631 15.5638C97.4102 15.1895 97.0756 14.8866 96.6613 14.657L96.6671 14.6628Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M108.956 10.6784C108.514 10.2713 107.971 9.94519 107.324 9.70208C106.676 9.45896 105.933 9.3374 105.091 9.3374C103.968 9.3374 102.978 9.55736 102.116 9.99729C101.255 10.4314 100.582 11.0527 100.093 11.8612C99.607 12.6696 99.3619 13.6228 99.3619 14.7226C99.3619 15.8224 99.6051 16.791 100.093 17.613C100.582 18.4349 101.255 19.0736 102.116 19.527C102.978 19.9805 103.968 20.2081 105.091 20.2081C105.944 20.2081 106.695 20.0866 107.343 19.8435C107.997 19.6004 108.545 19.2743 108.985 18.8672C109.424 18.46 109.759 18.0124 109.987 17.5262C110.214 17.0322 110.327 16.5421 110.327 16.0559H107.703C107.676 16.4167 107.567 16.7524 107.372 17.0612C107.178 17.3641 106.892 17.6072 106.511 17.7905C106.137 17.968 105.653 18.0568 105.059 18.0568C104.499 18.0568 103.988 17.9294 103.527 17.6728C103.073 17.4104 102.712 17.0322 102.445 16.5383C102.179 16.0385 102.044 15.4327 102.044 14.7226C102.044 14.0126 102.179 13.4067 102.445 12.9282C102.719 12.4477 103.083 12.0889 103.536 11.8535C103.997 11.6103 104.505 11.4888 105.057 11.4888C105.579 11.4888 106.022 11.5718 106.39 11.7358C106.758 11.8998 107.051 12.1197 107.271 12.3976C107.491 12.6677 107.629 12.9706 107.682 13.3044C107.687 13.343 107.695 13.3835 107.701 13.4221C107.707 13.4607 107.711 13.4974 107.711 13.5302H110.325V13.4511C110.325 12.9706 110.208 12.4902 109.975 12.0117C109.741 11.5254 109.401 11.0817 108.954 10.6803L108.956 10.6784Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M122.292 11.9403C121.811 11.1241 121.142 10.4874 120.29 10.0262C119.434 9.56699 118.446 9.33545 117.324 9.33545C116.201 9.33545 115.215 9.56699 114.361 10.0262C113.507 10.4874 112.836 11.1241 112.348 11.9403C111.867 12.7487 111.626 13.6864 111.626 14.7515C111.626 15.8166 111.867 16.7505 112.348 17.5724C112.836 18.3944 113.507 19.0389 114.361 19.5058C115.215 19.9669 116.203 20.1965 117.324 20.1965C118.444 20.1965 119.434 19.9669 120.29 19.5058C121.142 19.0389 121.811 18.3944 122.292 17.5724C122.778 16.7505 123.023 15.8108 123.023 14.7515C123.023 13.6922 122.778 12.7487 122.292 11.9403ZM119.979 16.5074C119.724 16.9994 119.37 17.3853 118.917 17.6612C118.462 17.9371 117.932 18.076 117.324 18.076C116.715 18.076 116.193 17.9371 115.732 17.6612C115.279 17.3853 114.925 16.9994 114.67 16.5074C114.417 16.0076 114.291 15.423 114.291 14.7515C114.291 14.0801 114.417 13.5012 114.67 13.015C114.925 12.523 115.279 12.1409 115.732 11.8708C116.193 11.6007 116.724 11.4675 117.324 11.4675C117.923 11.4675 118.462 11.6007 118.917 11.8708C119.37 12.1409 119.724 12.523 119.979 13.015C120.23 13.5012 120.358 14.0801 120.358 14.7515C120.358 15.423 120.23 16.0076 119.979 16.5074Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M132.564 5.3859V10.7557C132.259 10.4392 131.912 10.1691 131.523 9.94721C130.815 9.54009 130.045 9.33556 129.21 9.33556C128.376 9.33556 127.553 9.54395 126.806 9.95686C126.065 10.3717 125.464 10.9795 125.003 11.7822C124.55 12.5848 124.324 13.565 124.324 14.7227C124.324 15.8804 124.548 16.9146 124.993 17.7308C125.441 18.545 126.036 19.1644 126.775 19.585C127.524 19.9999 128.335 20.2063 129.21 20.2063C130.086 20.2063 130.862 19.9883 131.562 19.5561C131.938 19.3226 132.27 19.0448 132.564 18.7245V19.9883H135.207V5.3859C135.207 5.17365 135.032 5 134.818 5H132.953C132.739 5 132.564 5.17365 132.564 5.3859ZM132.564 15.2244C132.564 15.7511 132.434 16.2181 132.173 16.6252C131.92 17.0265 131.586 17.3429 131.173 17.5726C130.759 17.8022 130.308 17.9179 129.819 17.9179C129.053 17.9179 128.397 17.6575 127.857 17.1384C127.316 16.6194 127.047 15.8129 127.047 14.7227C127.047 13.6325 127.316 12.8222 127.857 12.3147C128.397 11.8015 129.053 11.5448 129.819 11.5448C130.288 11.5448 130.728 11.6567 131.142 11.8806C131.562 12.0986 131.905 12.3996 132.163 12.7894C132.432 13.1772 132.564 13.6306 132.564 14.1496V15.2244Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M147.132 11.9499C146.679 11.1279 146.031 10.4874 145.19 10.0262C144.356 9.56699 143.364 9.33545 142.216 9.33545C141.069 9.33545 140.113 9.56699 139.252 10.0262C138.39 10.4796 137.715 11.1144 137.229 11.9306C136.748 12.7449 136.509 13.6961 136.509 14.7805C136.509 15.8648 136.746 16.7794 137.219 17.6014C137.701 18.4233 138.367 19.0659 139.223 19.5251C140.077 19.9862 141.074 20.2158 142.216 20.2158C143.057 20.2158 143.804 20.1174 144.459 19.9206C145.118 19.7161 145.681 19.446 146.142 19.1102C146.601 18.7687 146.959 18.3905 147.211 17.9776C147.472 17.5551 147.622 17.1248 147.663 16.6849H145.039C145.019 16.8566 144.953 17.0264 144.838 17.1981C144.733 17.3679 144.568 17.53 144.348 17.6805C144.136 17.8252 143.858 17.941 143.518 18.0259C143.177 18.1108 142.773 18.1551 142.306 18.1551C141.619 18.1551 141.036 18.0201 140.553 17.75C140.08 17.474 139.719 17.0785 139.472 16.5672C139.333 16.272 139.234 15.9459 139.174 15.5889H147.774C147.785 15.5175 147.795 15.4018 147.803 15.2435C147.809 15.0873 147.813 14.9387 147.813 14.7998C147.813 13.7154 147.587 12.7661 147.132 11.9499ZM139.195 13.7443C139.26 13.4433 139.355 13.1674 139.483 12.9166C139.742 12.4168 140.106 12.0348 140.573 11.7724C141.047 11.5023 141.605 11.3672 142.245 11.3672C142.885 11.3672 143.428 11.4926 143.846 11.7435C144.268 11.9866 144.582 12.3088 144.79 12.7101C144.959 13.0343 145.054 13.3797 145.085 13.7443H139.195Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M37.0491 5.67586L36.9499 5.29382C36.9051 5.12402 36.7515 5.00439 36.5725 5.00439H33.2268C33.0498 5.00439 32.8942 5.12402 32.8494 5.29382L32.7502 5.672L28.9999 19.9888H31.7134L32.5849 16.4482H37.1872L38.0509 19.9888H40.7644L37.0471 5.67586H37.0491ZM33.1003 14.3663L34.8996 7.06895L36.6814 14.3663H33.1003Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M25 12.5012C25 15.9539 23.6018 19.0762 21.3393 21.339C19.0768 23.6017 15.9524 25 12.5024 25C9.05238 25 5.92559 23.6017 3.66549 21.339C3.42607 21.0995 3.19623 20.8481 2.97596 20.5895C2.3032 19.797 1.7262 18.9206 1.26652 17.9772C0.454894 16.3251 0 14.467 0 12.5012C0 5.59573 5.59519 0 12.5 0C15.9524 0 19.0768 1.39833 21.3369 3.66105C23.5994 5.92137 24.9976 9.04846 24.9976 12.4988L25 12.5012Z'
                    fill='#6941C6'
                  ></path>
                  <path
                    d='M20.6234 14.8645L18.4615 17.0267L12.919 11.4836C12.6867 11.2514 12.3085 11.2514 12.0762 11.4836L2.97116 20.5895C2.2984 19.797 1.7214 18.9206 1.26172 17.9772L10.3907 8.84737C11.5543 7.68369 13.4433 7.68369 14.6069 8.84737L20.6234 14.8645Z'
                    fill='white'
                  ></path>
                </svg>
              </div>
            </a>
            <div className='hidden lg:flex items-center space-x-8'>
              <div>
                <button className='font-medium text-gray-tertiary hover:text-black duration-150'>
                  <a href='https://amigoscode.com/courses'>Courses</a>
                </button>
              </div>
              <div>
                <div className='relative'>
                  <button className='flex pb-2 translate-y-1 items-center space-x-1 text-gray-tertiary hover:text-black duration-150'>
                    <p className='font-medium'>Products</p>
                    <div className='duration-300'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ transform: 'rotate(-90deg)' }}
                      >
                        <path
                          d='M12.5 15L7.5 10L12.5 5'
                          stroke='currentColor'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <button className='flex pb-2 translate-y-1 items-center space-x-1 text-gray-tertiary hover:text-black duration-150'>
                    <p className='font-medium'>Resources</p>
                    <div className='duration-300'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ transform: 'rotate(-90deg)' }}
                      >
                        <path
                          d='M12.5 15L7.5 10L12.5 5'
                          stroke='currentColor'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-5 md:space-x-10'>
            <div className='flex items-center space-x-5'>
              <div className='xl:min-w-[250px]'>
                <div className='relative flex w-full justify-end duration-150'>
                  <button aria-label='search-button' className='flex xl:hidden'>
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
                  </button>
                  <div className='xl:relative xl:flex w-full hidden'>
                    <button className='flex w-full items-center border border-gray-light/5 lg:rounded-md pl-2 pr-1 py-1 flex-1 text-gray-light font-medium bg-gray-offWhite justify-between space-x-10 hover:shadow-lg'>
                      <div className='flex items-center space-x-3'>
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
                      <div className='px-1.5 py-1 rounded-md border border-gray-light/5 bg-white'>
                        <p className='text-gray-primary font-medium'>
                          {keyboardShortcut}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block w-0.5 h-8 bg-gray-light/10 rounded-full'></div>
              <div className='hidden lg:flex'>
                <div className='flex space-x-3'>
                  <a href='https://sso.teachable.com/secure/183379/identity/login/password'>
                    <button className='flex font-medium items-center duration-300 w-full disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-accent text-white button_style px-3 py-2 text-sm md:text-base'>
                      <div className=''>Log in</div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='relative flex lg:hidden'>
              <button>
                <div aria-label='Open Menu'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    width='24'
                    height='24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default NavBar
