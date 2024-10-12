'use client'

import {
  CloudDownloadOutlined,
  CopyOutlined,
  CopyFilled,
} from '@ant-design/icons'
import ceoProfile from '../assets/images/app/ceo-talanta.png'
import {
  CallToAction,
  FrequentlyAskedQuestions,
  Testimonials,
} from '../components'
import SingleTestimonial from '../components/SingleTestimonial'
import CourseContent from '../components/Courses/CourseContent'
import { useCopyToClipboard } from '@uidotdev/usehooks'

const randomHash = crypto.randomUUID()

const CourseDetails = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const hasCopiedText = Boolean(copiedText)

  console.log(hasCopiedText)

  return (
    <>
      <section className='py-12 px-2 bg-gray-50'>
        <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8 pb-8 md:pb-20'>
          <div className='relative w-full flex space-x-5'>
            <div className='flex w-full flex-col'>
              <div className='mb-7 shadow-xl rounded-xl'>
                <div className='w-full h-full relative bg-black rounded-xl aspect-video'>
                  <div>
                    <img
                      alt='linux_thumbnail'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='object-cover rounded-xl'
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: 'transparent',
                      }}
                      src='https://www.amigoscode.com/assets/thumbnails/courses/intellij.webp'
                    />
                    <button className='group absolute w-full h-full duration-300'>
                      <div className='text-white duration-300 bg-black/20 group-hover:bg-black/40 w-full h-full flex justify-center items-center rounded-xl '>
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-8 md:w-12 w-8 md:h-12 group-hover:lg:scale-125 duration-300'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0.535156 10C0.535156 4.615 4.7729 0.25 10.0009 0.25C15.2289 0.25 19.4666 4.615 19.4666 10C19.4666 15.385 15.2289 19.75 10.0009 19.75C4.7729 19.75 0.535156 15.385 0.535156 10ZM14.1503 9.017C14.3204 9.1145 14.462 9.25703 14.5607 9.42986C14.6593 9.60269 14.7113 9.79952 14.7113 10C14.7113 10.2005 14.6593 10.3973 14.5607 10.5701C14.462 10.743 14.3204 10.8855 14.1503 10.983L8.71065 14.096C8.54443 14.191 8.357 14.2397 8.16691 14.2373C7.97681 14.2348 7.79063 14.1813 7.62677 14.082C7.46291 13.9828 7.32705 13.8411 7.23262 13.6712C7.13819 13.5012 7.08847 13.3088 7.08836 13.113V6.887C7.08836 6.03 7.98251 5.487 8.71065 5.904L14.1503 9.017Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='lg:flex lg:justify-between lg:items-start mb-6 lg:mb-4'>
                <div className='space-y-3'>
                  <h1 className='text-lg md:text-4xl font-semibold'>
                    The Complete JavaScript From beginning to advance
                  </h1>
                  <p className='text-lg font-light'>
                    Master JavaScript with the most complete course! Projects
                    Excellent course. we explain the core concepts in javascript
                    that are usually glossed over in other courses
                  </p>

                  <ul className='flex gap-4'>
                    <li className='flex items-center'>
                      <span className='mr-1.5 rounded bg-gray-900 px-2 text-sm font-semibold text-white'>
                        {' '}
                        4.9{' '}
                      </span>
                      <div className='flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-5 w-5 text-yellow-500'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-5 w-5 text-yellow-500'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-5 w-5 text-yellow-500'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-5 w-5 text-yellow-500'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-5 w-5 text-gray-400'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                        </svg>
                      </div>
                    </li>
                    <li className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-2 w-4 text-gray-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                      </svg>
                      245 Enrolled
                    </li>
                  </ul>
                  <ul className='sm:flex items-center text-sm text-gray-500'>
                    <li>
                      Created by{' '}
                      <a href='#' className='font-bold'>
                        {' '}
                        Duclair Fopa{' '}
                      </a>
                    </li>
                    <span className='hidden sm:inline mx-3 text-2xl'>·</span>
                    <li>Last updated 01/2024</li>
                  </ul>
                </div>
              </div>
              {/* <div className="lg:hidden mb-6">
                <div className="w-full rounded-xl p-3 md:p-5  space-y-8 md:shadow-md border border-gray-border/50">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-x-3 flex items-center">
                      <p className="text-2xl md:text-4xl font-bold">$149.98</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm md:text-black font-bold">
                      Course includes:
                    </p>
                    <div className="space-y-2">
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                          >
                            <path
                              d="M22.7 11.5L20.7005 13.5L18.7 11.5M20.9451 13C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.8273 21 17.35 19.6963 19 17.6573M12 7V12L15 14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          10:00:00
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-cyan-400"
                          >
                            <path
                              d="M10.7602 14.1667H16.7385M10.7602 14.1667L9.16602 17.5M10.7602 14.1667L13.1479 9.17419C13.3403 8.77189 13.4365 8.57075 13.5682 8.50718C13.6826 8.4519 13.8161 8.4519 13.9305 8.50718C14.0622 8.57075 14.1584 8.77189 14.3508 9.17419L16.7385 14.1667M16.7385 14.1667L18.3327 17.5M1.66602 4.16667H6.66602M6.66602 4.16667H9.58268M6.66602 4.16667V2.5M9.58268 4.16667H11.666M9.58268 4.16667C9.16923 6.63107 8.20984 8.86349 6.80397 10.737M8.33268 11.6667C7.82224 11.4373 7.30156 11.1184 6.80397 10.737M6.80397 10.737C5.67687 9.87314 4.66832 8.68886 4.16602 7.5M6.80397 10.737C5.46673 12.5191 3.72554 13.9765 1.66602 15"
                              stroke="#6941C6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          English Subtitles
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                          >
                            <path
                              d="M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          Certification Upon Completion
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.83268 8.33333V6.66667C5.83268 4.36548 7.69816 2.5 9.99935 2.5C11.3625 2.5 12.5728 3.15463 13.333 4.16667M9.99935 11.6667V13.3333M15.8327 12.5C15.8327 15.7217 13.221 18.3333 9.99935 18.3333C6.77769 18.3333 4.16602 15.7217 4.16602 12.5C4.16602 9.27834 6.77769 6.66667 9.99935 6.66667C13.221 6.66667 15.8327 9.27834 15.8327 12.5Z"
                              stroke="#6941C6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          Lifetime Course Access
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          Access to Telegram Group
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6673 15.8334V13.3334H5.83398C4.45327 13.3334 3.33398 14.4527 3.33398 15.8334M7.33398 18.3334H14.0007C14.9341 18.3334 15.4008 18.3334 15.7573 18.1518C16.0709 17.992 16.3259 17.737 16.4857 17.4234C16.6673 17.0669 16.6673 16.6002 16.6673 15.6667V4.33341C16.6673 3.39999 16.6673 2.93328 16.4857 2.57676C16.3259 2.26316 16.0709 2.00819 15.7573 1.8484C15.4008 1.66675 14.9341 1.66675 14.0007 1.66675H7.33398C5.93385 1.66675 5.23379 1.66675 4.69901 1.93923C4.2286 2.17892 3.84615 2.56137 3.60647 3.03177C3.33398 3.56655 3.33398 4.26662 3.33398 5.66675V14.3334C3.33398 15.7335 3.33398 16.4336 3.60647 16.9684C3.84615 17.4388 4.2286 17.8212 4.69901 18.0609C5.23379 18.3334 5.93385 18.3334 7.33398 18.3334Z"
                              stroke="#6941C6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          TalantaChain Textbook
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.99935 8.33341V11.6667M14.9993 8.33341V11.6667M1.66602 6.83341L1.66602 13.1667C1.66602 14.1002 1.66602 14.5669 1.84767 14.9234C2.00746 15.237 2.26243 15.492 2.57603 15.6518C2.93255 15.8334 3.39926 15.8334 4.33268 15.8334L15.666 15.8334C16.5994 15.8334 17.0661 15.8334 17.4227 15.6518C17.7363 15.492 17.9912 15.237 18.151 14.9234C18.3327 14.5669 18.3327 14.1002 18.3327 13.1667V6.83342C18.3327 5.89999 18.3327 5.43328 18.151 5.07677C17.9912 4.76316 17.7363 4.50819 17.4227 4.34841C17.0661 4.16675 16.5994 4.16675 15.666 4.16675L4.33268 4.16675C3.39926 4.16675 2.93255 4.16675 2.57603 4.3484C2.26243 4.50819 2.00746 4.76316 1.84767 5.07676C1.66602 5.43328 1.66602 5.89999 1.66602 6.83341ZM12.0827 10.0001C12.0827 11.1507 11.1499 12.0834 9.99935 12.0834C8.84876 12.0834 7.91602 11.1507 7.91602 10.0001C7.91602 8.84949 8.84876 7.91675 9.99935 7.91675C11.1499 7.91675 12.0827 8.84949 12.0827 10.0001Z"
                              stroke="#6941C6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          15 Days Money Back Guaranteed
                        </p>
                      </div>
                      <div className="space-x-4 flex items-center">
                        <div className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="5"
                              fill="#2562FE"
                            ></rect>
                            <path
                              d="M8.74345 18.8633C8.52796 18.8633 8.35018 18.7933 8.21011 18.6532C8.07004 18.5131 8 18.3353 8 18.1199V10.6368C8.01077 9.79641 8.21011 9.03679 8.59799 8.35799C8.99666 7.67918 9.53 7.14584 10.198 6.75795C10.8661 6.37006 11.6203 6.17612 12.4607 6.17612C13.3119 6.17612 14.0715 6.37545 14.7396 6.77411C15.4184 7.162 15.9517 7.69535 16.3396 8.37415C16.7383 9.04218 16.9376 9.80718 16.9376 10.6692C16.9376 11.5204 16.749 12.2854 16.3719 12.9642C16.0056 13.643 15.5046 14.1763 14.8689 14.5642C14.2332 14.9521 13.5166 15.146 12.7193 15.146C12.0405 15.146 11.4263 15.006 10.8768 14.7258C10.3273 14.4457 9.86402 14.0686 9.48691 13.5945V18.1199C9.48691 18.3353 9.41687 18.5131 9.2768 18.6532C9.1475 18.7933 8.96972 18.8633 8.74345 18.8633ZM12.4607 13.8208C13.0318 13.8208 13.5436 13.6861 13.9961 13.4167C14.4594 13.1366 14.8204 12.7594 15.079 12.2854C15.3483 11.8005 15.483 11.2618 15.483 10.6692C15.483 10.0658 15.3483 9.52704 15.079 9.05296C14.8204 8.5681 14.4594 8.19098 13.9961 7.92162C13.5436 7.64147 13.0318 7.5014 12.4607 7.5014C11.8897 7.5014 11.3725 7.64147 10.9092 7.92162C10.4566 8.20176 10.1011 8.57887 9.84247 9.05296C9.58388 9.52704 9.45458 10.0658 9.45458 10.6692C9.45458 11.2618 9.58388 11.8005 9.84247 12.2854C10.1011 12.7594 10.4566 13.1366 10.9092 13.4167C11.3725 13.6861 11.8897 13.8208 12.4607 13.8208Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-primary text-sm md:text-black font-light">
                          Free Portfolly (Launching Soon)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div> */}
              <div className='lg:hidden mb-6'>
                <div className='w-full p-5 rounded-xl  space-y-6 md:shadow-lg border border-gray-border/50'>
                  <h2 className='font-semibold text-black lg:text-lg mb-2'>
                    Share this Course
                  </h2>
                  <div className='flex space-x-3 items-center lg:justify-between'>
                    <div className='flex space-x-3'>
                      <a
                        className='rounded-xl  border border-gray-border flex items-center justify-center h-10 md:h-11 w-10 md:w-11 hover:scale-105 duration-200 hover:shadow-lg'
                        target='_blank'
                        href='https://twitter.com/intent/tweet?text=Linux and Shell Scripting&amp;url=https://www.amigoscode.com/courses/linux'
                      >
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 1200 1227'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5'
                        >
                          <path
                            d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </a>
                      <a
                        className='rounded-xl  border border-gray-border flex items-center justify-center h-10 md:h-11 w-10 md:w-11 hover:scale-105 duration-200 hover:shadow-lg'
                        target='_blank'
                        href='https://www.facebook.com/sharer/sharer.php?u=https://www.amigoscode.com/courses/linux&amp;quote=Linux and Shell Scripting'
                      >
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6'
                        >
                          <path
                            d='M12.5 0C9.18479 0 6.00537 1.31696 3.66116 3.66116C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66116 21.3388C6.00537 23.683 9.18479 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0Z'
                            fill='#039BE5'
                          ></path>
                          <path
                            d='M14.1976 15.8142H17.4324L17.9403 12.528H14.1969V10.732C14.1969 9.36685 14.643 8.15633 15.9199 8.15633H17.9719V5.28856C17.6114 5.23988 16.8489 5.1333 15.4081 5.1333C12.3995 5.1333 10.6357 6.72212 10.6357 10.3419V12.528H7.54297V15.8142H10.6357V24.8465C11.2482 24.9386 11.8686 25.0011 12.5055 25.0011C13.0811 25.0011 13.643 24.9484 14.1976 24.8734V15.8142Z'
                            fill='white'
                          ></path>
                        </svg>
                      </a>
                      <a
                        className='rounded-xl  border border-gray-border flex items-center justify-center h-10 md:h-11 w-10 md:w-11 hover:scale-105 duration-200 hover:shadow-lg'
                        target='_blank'
                        href='https://www.linkedin.com/sharing/share-offsite/?url=https://www.amigoscode.com/courses/linux'
                      >
                        <svg
                          width='25'
                          height='24'
                          viewBox='0 0 25 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6 text-[#1275B1]'
                        >
                          <path
                            d='M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <p className=' text-gray-500'>or</p>
                    <button
                      className={`rounded-xl flex items-center space-x-2 justify-center h-10 md:h-11 px-2 md:px-3 bg-accent/20 hover:scale-105 duration-200 border border-gray-border hover:shadow-lg ${
                        !hasCopiedText ? 'cursor-pointer' : 'cursor-not-allowed'
                      }`}
                      disabled={hasCopiedText}
                      onClick={() => copyToClipboard(randomHash)}
                    >
                      {!hasCopiedText ? <CopyOutlined /> : <CopyFilled />}
                      <p className='text-sm text-gray-500 whitespace-nowrap hidden md:flex '>
                        Copy link
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className='space-y-6'>
                <div className='lg:hidden'>
                  <div className='w-full p-5 rounded-xl  space-y-6 md:shadow-lg border border-gray-border/50'>
                    <h3 className='md:text-lg font-bold'>Instructors</h3>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-2'>
                        <img
                          alt='nelson'
                          loading='lazy'
                          width='48'
                          height='48'
                          decoding='async'
                          data-nimg='1'
                          className='rounded-full'
                          style={{ color: 'transparent' }}
                          src={ceoProfile}
                        />
                        <div className='flex justify-between items-start flex-1'>
                          <div>
                            <p className='text-sm md:text-black font-medium'>
                              Duclair Fopa
                            </p>
                            <p className='text-xs md:text-sm text-gray-700'>
                              Founder &amp; CEO
                            </p>
                          </div>
                          <div className='flex'>
                            <a
                              target='_blank'
                              href='https://nelson.portfolly.io/'
                            >
                              <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-8 w-8 md:h-10 md:w-10'
                              >
                                <rect
                                  width='24'
                                  height='24'
                                  rx='5'
                                  fill='#2562FE'
                                ></rect>
                                <path
                                  d='M8.74345 18.8633C8.52796 18.8633 8.35018 18.7933 8.21011 18.6532C8.07004 18.5131 8 18.3353 8 18.1199V10.6368C8.01077 9.79641 8.21011 9.03679 8.59799 8.35799C8.99666 7.67918 9.53 7.14584 10.198 6.75795C10.8661 6.37006 11.6203 6.17612 12.4607 6.17612C13.3119 6.17612 14.0715 6.37545 14.7396 6.77411C15.4184 7.162 15.9517 7.69535 16.3396 8.37415C16.7383 9.04218 16.9376 9.80718 16.9376 10.6692C16.9376 11.5204 16.749 12.2854 16.3719 12.9642C16.0056 13.643 15.5046 14.1763 14.8689 14.5642C14.2332 14.9521 13.5166 15.146 12.7193 15.146C12.0405 15.146 11.4263 15.006 10.8768 14.7258C10.3273 14.4457 9.86402 14.0686 9.48691 13.5945V18.1199C9.48691 18.3353 9.41687 18.5131 9.2768 18.6532C9.1475 18.7933 8.96972 18.8633 8.74345 18.8633ZM12.4607 13.8208C13.0318 13.8208 13.5436 13.6861 13.9961 13.4167C14.4594 13.1366 14.8204 12.7594 15.079 12.2854C15.3483 11.8005 15.483 11.2618 15.483 10.6692C15.483 10.0658 15.3483 9.52704 15.079 9.05296C14.8204 8.5681 14.4594 8.19098 13.9961 7.92162C13.5436 7.64147 13.0318 7.5014 12.4607 7.5014C11.8897 7.5014 11.3725 7.64147 10.9092 7.92162C10.4566 8.20176 10.1011 8.57887 9.84247 9.05296C9.58388 9.52704 9.45458 10.0658 9.45458 10.6692C9.45458 11.2618 9.58388 11.8005 9.84247 12.2854C10.1011 12.7594 10.4566 13.1366 10.9092 13.4167C11.3725 13.6861 11.8897 13.8208 12.4607 13.8208Z'
                                  fill='white'
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-2'>
                        <img
                          alt='Jamila'
                          loading='lazy'
                          width='48'
                          height='48'
                          decoding='async'
                          data-nimg='1'
                          className='rounded-full'
                          style={{ color: 'transparent' }}
                          src={ceoProfile}
                        />
                        <div className='flex justify-between items-start flex-1'>
                          <div>
                            <p className='text-sm md:text-black font-medium'>
                              Stael Fouwa
                            </p>
                            <p className='text-xs md:text-sm text-gray-light'>
                              Instructor
                            </p>
                          </div>
                          <a
                            target='_blank'
                            className='flex text-xs  lg:/80 lg:hover: items-center duration-200'
                            href='https://linkedin.com/in/a-abukar/'
                          >
                            <p>View Profile</p>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              style={{ transform: 'rotate(180deg)' }}
                              className='w-4'
                            >
                              <path
                                d='M12.5 15L7.5 10L12.5 5'
                                stroke='currentColor'
                                strokeWidth='1.66667'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white text-black border border-gray-border/50 rounded-xl p-4 md:p-6 space-y-4 md:space-y-8'>
                  <div>
                    <h2 className='font-semibold text-black lg:text-xl mb-2'>
                      What you &#x27;ll learn
                    </h2>
                    <div className='flex justify-start flex-wrap gap-x-5 gap-y-7 px-2 py-3 w-full'>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='linux logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/linux.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          linux
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='bash logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/bash.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          bash
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='terminal logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/terminal.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          terminal
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='vscode logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/vscode.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          vscode
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='aws logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/aws.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          aws
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='linode logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/linode.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          linode
                        </span>
                      </div>
                      <div
                        className='relative group w-6 h-6 md:w-8 md:h-8 flex justify-center'
                        style={{
                          opacity: 1,
                          transform:
                            'translateX(-3px) translateY(-3px) translateZ(0)',
                        }}
                      >
                        <img
                          alt='codespaces logo'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover relative'
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                          src='https://www.amigoscode.com/assets/tech-stack/codespaces.png'
                        />
                        <span className='md:group-hover:opacity-100 duration-200 invisible md:group-hover:visible bg-accent p-1.5 text-sm text-gray-100 rounded-md opacity-0 mx-auto z-10 absolute w-max top-9'>
                          codespaces
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-3 md:gap-6'>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        The Linux Operating System
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Linux Installation (Mac &amp;Windows)
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Renting Linux Servers from the Cloud
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>Linux File System</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Working with Files and Directories
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Master Command Line / Terminal
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>VIM Text Editor</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>Users and Groups</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Environment Variables
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>Shell Scripting</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        System Administration and Maintenance
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>Linux Networking</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        SSH (Secure Shell)
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Intro to Amazon Web Services
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>Intro to Docker</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Deploy Full Stack Application to AWS
                      </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='  translate-y-0.5'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3 w-3 md:h-4 md:w-4 text-cyan-400'
                        >
                          <path
                            d='M9 0.953125L3.5 6.45312L1 3.95312'
                            stroke='currentColor'
                            strokeWidth='1.6666'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-sm md:text-black'>
                        Overthewire Bandit (15 Levels)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='overflow-hidden relative py-14 space-y-6 h-[500px]'>
                <div className='w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 absolute'></div>
                <div
                  className='space-y-6 justify-between prose-md text-slate-800 overflow-hidden min-w-[90%]'
                  style={{ width: '100%' }}
                >
                  <p>
                    Do you want to gain the expertise that sets you apart in the
                    competitive world of software engineering? In this course,
                    you will embark on a transformative journey to become
                    proficient in Linux operating systems and shell scripting.
                    With engaging lessons and hands-on exercises, you will learn
                    how to navigate the Linux command line interface with ease.
                    From basic commands to advanced scripting techniques, you
                    &#x27;ll master the art of automation, allowing you to
                    streamline tasks and boost productivity.
                  </p>
                  <ul>
                    <li>
                      30 Chapter Roadmap: Gain a deep understanding of Linux
                      operating systems, file systems, and permissions.
                    </li>
                    <li>
                      Shell Scripting Mastery: Learn to write powerful shell
                      scripts to automate repetitive tasks and solve real-world
                      problems.
                    </li>
                    <li>
                      Command-Line Efficiency: Discover shortcuts, tricks, and
                      best practices to navigate the command line like a pro.
                    </li>
                    <li>
                      Problem-Solving: Linux and shell scripting can help you
                      solve problems and create solutions in various domains
                      such as web development, data analysis, security and more
                    </li>
                  </ul>
                  <h2 id='who-is-the-course-for'>
                    <a
                      className='anchor'
                      href='#who-is-the-course-for'
                      aria-label='Jump to section: Who is the course for'
                    >
                      <span className='icon icon-link'></span>
                    </a>
                    Who is the course for?
                  </h2>
                  <p>
                    If you want to learn how to use Linux and shell scripting,
                    this course is for you. You will discover how to do various
                    tasks, personalize your environment, and enhance your skills
                    with shell scripting. No matter if you are a student, a
                    professional, a hobbyist, or a beginner, you will have fun
                    and learn a lot in this course. This course will also help
                    you get ready for more advanced Linux endeavours.
                  </p>

                  <div className='flex items-center justify-center'>
                    <img
                      src='https://www.filepicker.io/api/file/6fWmZFsTcCjo3cQWpFWx'
                      alt='Linux Penguin with Glasses'
                      className=''
                    />
                  </div>
                  <h2 id='3-reasons-to-learn-linux'>
                    <a
                      className='anchor'
                      href='#3-reasons-to-learn-linux'
                      aria-label='Jump to section: 3 reasons to learn Linux'
                    >
                      <span className='icon icon-link'></span>
                    </a>
                    3 Reasons to Learn Linux:
                  </h2>
                  <p>
                    Linux is an operating system that runs on most of the
                    internet and many devices. It’s open source, which means
                    that anyone can use it, modify it, and share it. It’s based
                    on the Unix philosophy of simplicity, modularity, and
                    portability.
                  </p>
                  <p>
                    Learning Linux is a game-changer for aspiring IT
                    professionals, developers, and anyone seeking to boost their
                    career in the tech industry. With the Linux operating system
                    powering over two-thirds of web servers, it &#x27;s clear
                    that Linux is a must-have skill for those looking to succeed
                    in today &#x27;s tech industry and here are three reasons
                    how:
                  </p>
                  <ol>
                    <li>
                      Increased Career Opportunities: Linux is widely used in
                      the IT industry, and having Linux skills can open doors
                      for numerous career opportunities. Linux professionals are
                      in high demand, particularly in roles such as system
                      administration, cloud computing, cybersecurity, and
                      DevOps. By learning Linux, you can enhance your
                      employability and potentially earn higher salaries.
                    </li>
                    <li>
                      Versatility and Transferable Skills: Linux is an operating
                      system that can be used across a wide range of devices,
                      including servers, desktops, smartphones, and IoT devices.
                      By learning Linux, you gain versatile skills that can be
                      applied in various domains. Moreover, Linux commands and
                      concepts tend to be consistent across different
                      distributions, making your knowledge transferable between
                      Linux-based systems.
                    </li>
                    <li>
                      Enhanced Technical Knowledge: Learning Linux gives you a
                      deeper understanding of how computer systems and networks
                      operate. You gain hands-on experience with command-line
                      interfaces and gain insights into operating system
                      components, file systems, networking, security, and more.
                      This knowledge can significantly benefit your overall
                      technical skills and enable you to troubleshoot and solve
                      complex problems.
                    </li>
                  </ol>
                  <div
                    className='my-12 flex items-center justify-center rounded-md '
                    style={{ padding: '40px' }}
                  >
                    <img
                      src='https://www.filepicker.io/api/file/gKGZY1loQjuWiYakEQQ8'
                      alt='Linux Stats'
                      className='h-full w-full rounded-md'
                    />
                  </div>
                  <h2 id='your-instructors'>
                    <a
                      className='anchor'
                      href='#your-instructors'
                      aria-label='Jump to section: Your instructors'
                    >
                      <span className='icon icon-link'></span>
                    </a>
                    Your Instructors:
                  </h2>
                  <div
                    className='my-12 flex items-center justify-center rounded-md '
                    style={{ padding: '40px' }}
                  >
                    <img
                      src='https://www.filepicker.io/api/file/sOadot5lQ4u2AcEaq3g9'
                      alt='Your instructors'
                      className='w-full rounded-sm'
                    />
                  </div>
                  <hr />
                </div>
              </div>
              <div>
                <button
                  type='button'
                  className='flex items-center justify-center text-cyan-500 text-sm font-semibold  mt-5'
                >
                  <p>Show more</p>
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
                </button>
              </div>

              <CourseContent />

              <div className='w-full py-14 space-y-6'>
                <h2 className='font-semibold text-black lg:text-xl mb-2'>
                  Other courses
                </h2>
                <div className='md:grid space-y-6 md:space-y-0 md:gap-6 md:grid-cols-2'>
                  <div>
                    <a className='w-full' href='/courses/html'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-slate-500 xl:h-[240px]'>
                          <img
                            alt='HTML Essentials card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/javascript-mastery.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] rounded font-medium py-1 px-2.5 text-sm text-white'>
                              <p>COMING SOON</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg text-gray-primary font-semibold duration-200 truncate'>
                          HTML Essentials
                        </h2>
                        <p className='text-sm text-gray-700'>
                          Welcome to the HTML Essentials for Web Development
                          course!
                        </p>
                        <p className='text-sm lg:text-black font-semibold '>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className='w-full' href='/courses/html'>
                      <div className='space-y-1.5 group rounded-md duration-300 hover:cursor-pointer w-full'>
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md border border-slate-500 xl:h-[240px]'>
                          <img
                            alt='HTML Essentials card'
                            loading='lazy'
                            width='100'
                            height='100'
                            decoding='async'
                            data-nimg='1'
                            className='rounded-md w-full h-full object-cover group-hover:scale-105 duration-300'
                            style={{ color: 'transparent' }}
                            src='https://www.amigoscode.com/assets/thumbnails/courses/javascript-mastery.webp'
                          />
                          <div className='absolute  top-1.5 right-1.5'>
                            <div className='border flex items-center justify-center w-fit text-nowrap bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] rounded font-medium py-1 px-2.5 text-sm text-white'>
                              <p>COMING SOON</p>
                            </div>
                          </div>
                          <time className='absolute bottom-1.5 right-1.5 text-white text-sm bg-zinc-800 px-1 rounded-sm'>
                            01:00:00
                          </time>
                        </div>
                        <h2 className='text-black md:text-lg text-gray-primary font-semibold duration-200 truncate'>
                          HTML Essentials
                        </h2>
                        <p className='text-sm text-gray-700'>
                          Welcome to the HTML Essentials for Web Development
                          course!
                        </p>
                        <p className='text-sm lg:text-black font-semibold '>
                          Free
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block max-w-[400px] w-full space-y-3 sticky top-2 h-fit'>
              <div className='w-full rounded-xl p-3 md:p-5  space-y-8 md:shadow-md border border-gray-border/50'>
                <div className='flex items-center justify-between space-x-2'>
                  <div className='space-x-3 flex items-center'>
                    <p className='text-2xl md:text-4xl font-bold text-cyan-500'>
                      $120.99
                    </p>
                  </div>
                </div>
                <div className='space-y-3'>
                  <p className='text-sm md:text-black font-bold'>
                    Course includes:
                  </p>
                  <div className='space-y-2'>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 text-cyan-400'
                        >
                          <path
                            d='M22.7 11.5L20.7005 13.5L18.7 11.5M20.9451 13C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.8273 21 17.35 19.6963 19 17.6573M12 7V12L15 14'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        10:00:00
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='stroke-cyan-400'
                        >
                          <path
                            d='M10.7602 14.1667H16.7385M10.7602 14.1667L9.16602 17.5M10.7602 14.1667L13.1479 9.17419C13.3403 8.77189 13.4365 8.57075 13.5682 8.50718C13.6826 8.4519 13.8161 8.4519 13.9305 8.50718C14.0622 8.57075 14.1584 8.77189 14.3508 9.17419L16.7385 14.1667M16.7385 14.1667L18.3327 17.5M1.66602 4.16667H6.66602M6.66602 4.16667H9.58268M6.66602 4.16667V2.5M9.58268 4.16667H11.666M9.58268 4.16667C9.16923 6.63107 8.20984 8.86349 6.80397 10.737M8.33268 11.6667C7.82224 11.4373 7.30156 11.1184 6.80397 10.737M6.80397 10.737C5.67687 9.87314 4.66832 8.68886 4.16602 7.5M6.80397 10.737C5.46673 12.5191 3.72554 13.9765 1.66602 15'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        English Subtitles
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 text-cyan-400'
                        >
                          <path
                            d='M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        Certification Upon Completion
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.83268 8.33333V6.66667C5.83268 4.36548 7.69816 2.5 9.99935 2.5C11.3625 2.5 12.5728 3.15463 13.333 4.16667M9.99935 11.6667V13.3333M15.8327 12.5C15.8327 15.7217 13.221 18.3333 9.99935 18.3333C6.77769 18.3333 4.16602 15.7217 4.16602 12.5C4.16602 9.27834 6.77769 6.66667 9.99935 6.66667C13.221 6.66667 15.8327 9.27834 15.8327 12.5Z'
                            stroke='#06b6d4'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        Lifetime Course Access
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='text-cyan-400'
                        >
                          <path
                            d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        Access to Telegram Group
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.6673 15.8334V13.3334H5.83398C4.45327 13.3334 3.33398 14.4527 3.33398 15.8334M7.33398 18.3334H14.0007C14.9341 18.3334 15.4008 18.3334 15.7573 18.1518C16.0709 17.992 16.3259 17.737 16.4857 17.4234C16.6673 17.0669 16.6673 16.6002 16.6673 15.6667V4.33341C16.6673 3.39999 16.6673 2.93328 16.4857 2.57676C16.3259 2.26316 16.0709 2.00819 15.7573 1.8484C15.4008 1.66675 14.9341 1.66675 14.0007 1.66675H7.33398C5.93385 1.66675 5.23379 1.66675 4.69901 1.93923C4.2286 2.17892 3.84615 2.56137 3.60647 3.03177C3.33398 3.56655 3.33398 4.26662 3.33398 5.66675V14.3334C3.33398 15.7335 3.33398 16.4336 3.60647 16.9684C3.84615 17.4388 4.2286 17.8212 4.69901 18.0609C5.23379 18.3334 5.93385 18.3334 7.33398 18.3334Z'
                            stroke='#06b6d4'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        TalantaChain Textbook
                      </p>
                    </div>
                    <div className='space-x-4 flex items-center'>
                      <div className=''>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.99935 8.33341V11.6667M14.9993 8.33341V11.6667M1.66602 6.83341L1.66602 13.1667C1.66602 14.1002 1.66602 14.5669 1.84767 14.9234C2.00746 15.237 2.26243 15.492 2.57603 15.6518C2.93255 15.8334 3.39926 15.8334 4.33268 15.8334L15.666 15.8334C16.5994 15.8334 17.0661 15.8334 17.4227 15.6518C17.7363 15.492 17.9912 15.237 18.151 14.9234C18.3327 14.5669 18.3327 14.1002 18.3327 13.1667V6.83342C18.3327 5.89999 18.3327 5.43328 18.151 5.07677C17.9912 4.76316 17.7363 4.50819 17.4227 4.34841C17.0661 4.16675 16.5994 4.16675 15.666 4.16675L4.33268 4.16675C3.39926 4.16675 2.93255 4.16675 2.57603 4.3484C2.26243 4.50819 2.00746 4.76316 1.84767 5.07676C1.66602 5.43328 1.66602 5.89999 1.66602 6.83341ZM12.0827 10.0001C12.0827 11.1507 11.1499 12.0834 9.99935 12.0834C8.84876 12.0834 7.91602 11.1507 7.91602 10.0001C7.91602 8.84949 8.84876 7.91675 9.99935 7.91675C11.1499 7.91675 12.0827 8.84949 12.0827 10.0001Z'
                            stroke='#06b6d4'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-primary text-sm md:text-black font-light'>
                        15 Days Money Back Guaranteed
                      </p>
                    </div>
                  </div>
                </div>
                <div className='space-y-2 md:space-y-4'>
                  <div></div>
                  <div>
                    <a
                      target='_blank'
                      href='https://app.amigoscode.com/purchase?product_id=5207673'
                    >
                      <button className='flex font-medium items-center justify-center duration-300 w-full border border-cyan-400 disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-accent text-white button_style px-3 py-2 text-sm md:text-black rounded-md'>
                        <div className=''>Download Full PDF Curriculum</div>
                        <div className='ml-2'>
                          <CloudDownloadOutlined width='20' height='20' />
                        </div>
                      </button>
                    </a>
                  </div>
                  <div>
                    <a
                      target='_blank'
                      href='https://app.amigoscode.com/purchase?product_id=5207673'
                    >
                      <button className='flex font-medium items-center justify-center duration-300 w-full bg-cyan-600 disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:shadow-none bg-accent text-white px-3 py-2 text-sm rounded-md'>
                        <div className=''>Enroll Now</div>
                        <div className='ml-2'>
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
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full  p-5 rounded-xl space-y-6 md:shadow-lg border border-gray-border/50'>
                <h3 className='md:text-lg font-bold text-black'>Instructors</h3>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-2'>
                    <img
                      alt='nelson'
                      loading='lazy'
                      width='48'
                      height='48'
                      decoding='async'
                      data-nimg='1'
                      className='rounded-full'
                      style={{ color: 'transparent' }}
                      src='https://media.licdn.com/dms/image/v2/D4E03AQHquS421GVgWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715855612120?e=1733356800&v=beta&t=scbap3P97GRFO1w4GViMj19GkdJaf3NghbokcLOO20A'
                    />
                    <div className='flex justify-between items-start flex-1'>
                      <div>
                        <p className='text-sm md:text-black font-medium'>
                          Duclair Fopa
                        </p>
                        <p className='text-xs md:text-sm text-gray-500'>
                          Founder &amp; CEO
                        </p>
                      </div>
                      <div className='flex'>
                        <button className='group transition-all duration-500 hover:-translate-y-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='48'
                            height='48'
                            viewBox='0 0 92 93'
                            fill='none'
                          >
                            <rect
                              x='0.138672'
                              y='1'
                              width='91.5618'
                              height='91.5618'
                              rx='15'
                              fill='#34AADF'
                            />
                            <path
                              d='M25.0881 43.5652C25.0881 43.5652 43.716 35.7194 50.1765 32.9567C52.6532 31.8518 61.0518 28.3155 61.0518 28.3155C61.0518 28.3155 64.9282 26.7685 64.6052 30.5256C64.4974 32.0728 63.6361 37.4874 62.7747 43.3442C61.4825 51.6322 60.0827 60.6935 60.0827 60.6935C60.0827 60.6935 59.8674 63.2352 58.0369 63.6772C56.2065 64.1192 53.1914 62.1302 52.6532 61.6881C52.2223 61.3566 44.5774 56.3838 41.7778 53.9527C41.0241 53.2897 40.1627 51.9637 41.8854 50.4166C45.7618 46.7699 50.3919 42.2392 53.1914 39.3661C54.4836 38.04 55.7757 34.9459 50.3919 38.703C42.7469 44.1178 35.2096 49.201 35.2096 49.201C35.2096 49.201 33.4868 50.306 30.2565 49.3115C27.0261 48.317 23.2575 46.9909 23.2575 46.9909C23.2575 46.9909 20.6734 45.3334 25.0881 43.5652Z'
                              fill='white'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-2'>
                    <img
                      alt='Jamila'
                      loading='lazy'
                      width='48'
                      height='48'
                      decoding='async'
                      data-nimg='1'
                      className='rounded-full'
                      style={{ color: 'transparent' }}
                      src='https://media.licdn.com/dms/image/v2/D4E03AQHquS421GVgWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715855612120?e=1733356800&v=beta&t=scbap3P97GRFO1w4GViMj19GkdJaf3NghbokcLOO20A'
                    />
                    <div className='flex justify-between items-start flex-1'>
                      <div>
                        <p className='text-sm md:text-black font-medium'>
                          Stael Fouwa
                        </p>
                        <p className='text-xs md:text-sm text-gray-500'>
                          Instructor
                        </p>
                      </div>
                      <div className='flex'>
                        <button className='group transition-all duration-500 hover:-translate-y-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='48'
                            height='48'
                            viewBox='0 0 92 93'
                            fill='none'
                          >
                            <rect
                              x='0.138672'
                              y='1'
                              width='91.5618'
                              height='91.5618'
                              rx='15'
                              fill='#34AADF'
                            />
                            <path
                              d='M25.0881 43.5652C25.0881 43.5652 43.716 35.7194 50.1765 32.9567C52.6532 31.8518 61.0518 28.3155 61.0518 28.3155C61.0518 28.3155 64.9282 26.7685 64.6052 30.5256C64.4974 32.0728 63.6361 37.4874 62.7747 43.3442C61.4825 51.6322 60.0827 60.6935 60.0827 60.6935C60.0827 60.6935 59.8674 63.2352 58.0369 63.6772C56.2065 64.1192 53.1914 62.1302 52.6532 61.6881C52.2223 61.3566 44.5774 56.3838 41.7778 53.9527C41.0241 53.2897 40.1627 51.9637 41.8854 50.4166C45.7618 46.7699 50.3919 42.2392 53.1914 39.3661C54.4836 38.04 55.7757 34.9459 50.3919 38.703C42.7469 44.1178 35.2096 49.201 35.2096 49.201C35.2096 49.201 33.4868 50.306 30.2565 49.3115C27.0261 48.317 23.2575 46.9909 23.2575 46.9909C23.2575 46.9909 20.6734 45.3334 25.0881 43.5652Z'
                              fill='white'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full  p-5 rounded-xl space-y-6 md:shadow-lg border border-gray-border/50'>
                <h2 className='font-semibold text-black lg:text-lg mb-2'>
                  Share this Course
                </h2>
                <div className='flex space-x-3 items-center lg:justify-between'>
                  <div className='flex space-x-3'>
                    <button className='group transition-all duration-500 hover:-translate-y-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 93 92'
                        fill='none'
                      >
                        <rect
                          x='1.13867'
                          width='91.5618'
                          height='91.5618'
                          rx='15'
                          fill='#337FFF'
                        />
                        <path
                          d='M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z'
                          fill='white'
                        />
                      </svg>
                    </button>
                    <button className='group transition-all duration-500 hover:-translate-y-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 93 93'
                        fill='none'
                      >
                        <rect
                          x='1.13867'
                          y='1'
                          width='91.5618'
                          height='91.5618'
                          rx='15'
                          fill='#006699'
                        />
                        <path
                          d='M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z'
                          fill='white'
                        />
                      </svg>
                    </button>
                    <button className='group transition-all duration-500 hover:-translate-y-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 93 92'
                        fill='none'
                      >
                        <rect
                          x='1.13867'
                          width='91.5618'
                          height='91.5618'
                          rx='15'
                          fill='url(#paint0_linear_7092_54439)'
                        />
                        <path
                          d='M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z'
                          fill='white'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_7092_54439'
                            x1='90.9407'
                            y1='91.5618'
                            x2='-0.621143'
                            y2='-2.46459e-06'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#FBE18A' />
                            <stop offset='0.21' stopColor='#FCBB45' />
                            <stop offset='0.38' stopColor='#F75274' />
                            <stop offset='0.52' stopColor='#D53692' />
                            <stop offset='0.74' stopColor='#8F39CE' />
                            <stop offset='1' stopColor='#5B4FE9' />
                          </linearGradient>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <p className='text-gray-500'>or</p>
                  <button
                    className={`rounded-xl flex items-center space-x-2 justify-center h-10 md:h-11 px-2 md:px-3 bg-accent/20 hover:scale-105 duration-200 border border-gray-border hover:shadow-lg ${
                      !hasCopiedText ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                    disabled={hasCopiedText}
                    onClick={() => copyToClipboard(randomHash)}
                  >
                    {!hasCopiedText ? (
                      <CopyOutlined className='text-gray-700' />
                    ) : (
                      <CopyFilled className='text-gray-700' />
                    )}
                    <p className='text-sm text-gray-500 whitespace-nowrap hidden md:flex '>
                      Copy link
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SingleTestimonial />

      <Testimonials isGray={false} />

      <FrequentlyAskedQuestions />
      <CallToAction />
    </>
  )
}
export default CourseDetails
