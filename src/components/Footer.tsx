import logoFooter from '../assets/images/app/logo-footer.png'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className='px-4 py-10 bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] text-white flex w-full'>
      <div className='max-w-[1400px] mx-auto space-y-10 lg:space-y-16 w-full'>
        <div className='space-y-8 md:space-y-12'>
          <div>
            <div className='flex flex-col space-y-10 md:space-y-0 md:space-x-5 md:flex-row md:items-center md:justify-between'>
              <div className='space-y-2'>
                <h3 className='text-lg md:text-xl font-semibold'>
                  Join our newsletter
                </h3>
                <p className='text-sm md:text-base font-light'>
                  We’ll send you a nice letter once per week. No spam.
                </p>
              </div>
              <div className='flex flex-col w-full sm:max-w-sm md:max-w-lg'>
                <form className='flex flex-col space-y-0.5 md:space-y-0 md:flex-row md:space-x-2 text-black'>
                  <div className='w-full lg:w-[40%]'>
                    <input
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out'
                      type='text'
                      placeholder='Name'
                      id='name'
                      name='name'
                    />
                    <div className='h-[18px] mt-1'></div>
                  </div>

                  <div className='w-full lg:w-[60%]'>
                    <input
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out'
                      type='email'
                      placeholder='Email'
                      id='email'
                      name='email'
                    />
                    <div className='h-[18px] mt-1'></div>
                  </div>

                  <div>
                    <button
                      className='flex font-medium items-center justify-center w-full bg-accent text-white px-4 py-2.5 rounded-md transition duration-300 ease-in-out hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed whitespace-nowrap disabled:opacity-50 disabled:hover:bg-accent disabled:hover:shadow-none bg-cyan-600'
                      type='submit'
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <hr className='border-none h-[1px] bg-cyan-500/20' />
          </div>
        </div>
        <div className='space-y-16 lg:flex lg:justify-between w-full lg:space-y-0 lg:space-x-16'>
          <div className='flex flex-col space-y-8 lg:space-y-5 lg:max-w-xs'>
            <div>
              <img
                width='220'
                height='50'
                alt='Talantachain Logo'
                src={logoFooter}
              />
            </div>
            <p className='text-sm md:text-base'>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <div className='flex space-x-5 text-gray-4 items-center'>
              <a
                className='hover:text-white'
                title='Youtube link'
                target='_blank'
                href='https://www.youtube.com/@amigoscode'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    width='35'
                    height='25'
                    viewBox='0 0 35 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.6031 20.75C33.2602 22.5 31.8031 23.8336 30.0031 24.0836C27.1742 24.5 22.4594 25 17.1445 25C11.9156 25 7.20078 24.5 4.28594 24.0836C2.48594 23.8336 1.02813 22.5 0.685938 20.75C0.342969 18.8336 0 16 0 12.5C0 9 0.342969 6.16641 0.685938 4.25C1.02891 2.5 2.48594 1.16641 4.28594 0.916407C7.11484 0.5 11.8297 0 17.1445 0C22.4594 0 27.0883 0.5 30.0031 0.916407C31.8031 1.16641 33.2609 2.5 33.6031 4.25C33.9461 6.16641 34.375 9 34.375 12.5C34.2891 16 33.9461 18.8336 33.6031 20.75Z'
                      fill='url(#paint0_linear_314_711)'
                    ></path>
                    <path
                      opacity='0.05'
                      d='M23.7125 11.2813L14.7781 5.32505C14.3273 5.02427 13.7516 4.99614 13.2742 5.25239C12.7969 5.50786 12.5 6.00239 12.5 6.5438V18.4563C12.5 18.9977 12.7969 19.493 13.2742 19.7485C13.4914 19.8649 13.7281 19.9219 13.9648 19.9219C14.2492 19.9219 14.532 19.8391 14.7773 19.6758L23.7117 13.7196C24.1203 13.4469 24.3641 12.9915 24.3641 12.5008C24.3648 12.0094 24.1203 11.554 23.7125 11.2813Z'
                      fill='black'
                    ></path>
                    <path
                      opacity='0.07'
                      d='M14.5945 5.6559L23.0242 11.2762C23.5625 11.6629 23.925 12.009 23.925 12.4582C23.925 12.9075 23.75 13.2207 23.3664 13.5004C23.0766 13.7114 14.7375 19.2536 14.7375 19.2536C14.0336 19.7254 12.8906 19.6254 12.8906 18.0825V6.83325C12.8906 5.26684 14.1281 5.34497 14.5945 5.6559Z'
                      fill='black'
                    ></path>
                    <path
                      d='M13.2812 18.4119V6.58764C13.2812 6.00717 13.9281 5.66029 14.4117 5.98295L23.2805 11.8954C23.7125 12.1829 23.7125 12.8173 23.2805 13.1056L14.4117 19.0181C13.9281 19.3392 13.2812 18.9931 13.2812 18.4119Z'
                      fill='white'
                    ></path>
                    <defs>
                      <linearGradient
                        id='paint0_linear_314_711'
                        x1='6.10625'
                        y1='1.46172'
                        x2='30.6609'
                        y2='26.0164'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#F44F5A'></stop>
                        <stop offset='0.443' stopColor='#EE3D4A'></stop>
                        <stop offset='1' stopColor='#E52030'></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='Twitter link'
                target='_blank'
                href='https://twitter.com/amigoscode'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 1200 1227'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'
                      fill='currentColor'
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='Discord link'
                target='_blank'
                href='https://discord.com/invite/2QN2Jwht'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    width='35'
                    height='25'
                    viewBox='0 0 35 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.7863 3.23055C29.7355 3.15082 29.6776 3.08829 29.6018 3.03123C29.0007 2.57944 25.9507 0.421308 22.0472 0.00234514C22.0394 0.0015635 22.0097 0 22.0026 0C21.926 0 21.8596 0.0445534 21.8275 0.10943L21.6173 0.529956C21.604 0.555751 21.5962 0.585453 21.5962 0.616719C21.5962 0.701919 21.6509 0.774612 21.7275 0.801188C21.7322 0.802751 21.765 0.809786 21.7767 0.812131C25.112 1.61566 27.1412 3.07109 28.928 4.67738C25.7647 3.06249 22.6405 1.55001 17.1963 1.55001C11.7521 1.55001 8.62865 3.06328 5.46454 4.67738C7.25138 3.07109 9.28054 1.61566 12.6158 0.812131C12.6276 0.809005 12.6604 0.802751 12.6651 0.801188C12.7417 0.774612 12.7964 0.701919 12.7964 0.616719C12.7964 0.585453 12.7894 0.555751 12.7761 0.529956L12.565 0.10943C12.533 0.0445534 12.4673 0 12.3899 0C12.3829 0 12.3524 0.0015635 12.3454 0.00234514C8.44183 0.421308 5.39184 2.57944 4.79076 3.03123C4.71494 3.08829 4.65788 3.15082 4.60629 3.23055C4.05288 4.09583 0.659752 9.78701 0.000823143 20.1391C-0.00621168 20.2501 0.032089 20.365 0.106346 20.4479C3.69567 24.4687 8.84673 24.9439 9.94572 24.9994C10.0763 25.0057 10.2013 24.9486 10.2795 24.8439L11.2816 23.508C11.3597 23.4033 11.3175 23.2564 11.1948 23.2118C9.08044 22.4411 6.72612 21.1013 4.68211 18.7517C7.21543 20.6668 11.0369 22.6545 17.1963 22.6545C23.3557 22.6545 27.1771 20.6668 29.7097 18.7517C27.6649 21.1013 25.3113 22.4403 23.197 23.2118C23.0743 23.2564 23.0321 23.4033 23.1102 23.508L24.1123 24.8439C24.1912 24.9486 24.3155 25.0065 24.4461 24.9994C25.5458 24.9431 30.6961 24.4687 34.2854 20.4479C34.3597 20.365 34.398 20.2501 34.391 20.1391C33.7328 9.78701 30.3397 4.09583 29.7863 3.23055Z'
                      fill='url(#paint0_radial_314_731)'
                    ></path>
                    <path
                      opacity='0.05'
                      d='M22.2674 17.9666C24.21 17.9666 25.7848 16.2168 25.7848 14.0584C25.7848 11.8999 24.21 10.1501 22.2674 10.1501C20.3248 10.1501 18.75 11.8999 18.75 14.0584C18.75 16.2168 20.3248 17.9666 22.2674 17.9666Z'
                      fill='black'
                    ></path>
                    <path
                      opacity='0.05'
                      d='M22.2672 17.5756C23.994 17.5756 25.3938 16.0008 25.3938 14.0582C25.3938 12.1156 23.994 10.5408 22.2672 10.5408C20.5404 10.5408 19.1406 12.1156 19.1406 14.0582C19.1406 16.0008 20.5404 17.5756 22.2672 17.5756Z'
                      fill='black'
                    ></path>
                    <path
                      d='M22.267 17.1846C23.7779 17.1846 25.0028 15.7848 25.0028 14.058C25.0028 12.3312 23.7779 10.9314 22.267 10.9314C20.7561 10.9314 19.5312 12.3312 19.5312 14.058C19.5312 15.7848 20.7561 17.1846 22.267 17.1846Z'
                      fill='white'
                    ></path>
                    <path
                      opacity='0.05'
                      d='M12.1112 17.9666C14.0538 17.9666 15.6286 16.2168 15.6286 14.0584C15.6286 11.8999 14.0538 10.1501 12.1112 10.1501C10.1685 10.1501 8.59375 11.8999 8.59375 14.0584C8.59375 16.2168 10.1685 17.9666 12.1112 17.9666Z'
                      fill='black'
                    ></path>
                    <path
                      opacity='0.05'
                      d='M12.111 17.5756C13.8377 17.5756 15.2376 16.0008 15.2376 14.0582C15.2376 12.1156 13.8377 10.5408 12.111 10.5408C10.3842 10.5408 8.98438 12.1156 8.98438 14.0582C8.98438 16.0008 10.3842 17.5756 12.111 17.5756Z'
                      fill='black'
                    ></path>
                    <path
                      d='M12.1108 17.1846C13.6217 17.1846 14.8465 15.7848 14.8465 14.058C14.8465 12.3312 13.6217 10.9314 12.1108 10.9314C10.5998 10.9314 9.375 12.3312 9.375 14.058C9.375 15.7848 10.5998 17.1846 12.1108 17.1846Z'
                      fill='white'
                    ></path>
                    <defs>
                      <radialGradient
                        id='paint0_radial_314_731'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(17.1963 1.55704) scale(25.2097)'
                      >
                        <stop stopColor='#8C9EFF'></stop>
                        <stop offset='0.368' stopColor='#889AF8'></stop>
                        <stop offset='0.889' stopColor='#7E8FE6'></stop>
                        <stop offset='1' stopColor='#7B8CE1'></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='Instagram link'
                target='_blank'
                href='https://www.instagram.com/amigoscode/'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.4529 24.9868L5.57137 25C2.51742 25.0028 0.0166602 22.5069 0.0131898 19.4529L2.31393e-06 5.57137C-0.002774 2.51742 2.49313 0.0166602 5.54707 0.0131898L19.4286 2.31393e-06C22.4826 -0.002774 24.9833 2.49313 24.9868 5.54707L25 19.4286C25.0035 22.4833 22.5069 24.984 19.4529 24.9868Z'
                      fill='url(#paint0_radial_314_721)'
                    ></path>
                    <path
                      d='M19.4529 24.9868L5.57137 25C2.51742 25.0028 0.0166602 22.5069 0.0131898 19.4529L2.31393e-06 5.57137C-0.002774 2.51742 2.49313 0.0166602 5.54707 0.0131898L19.4286 2.31393e-06C22.4826 -0.002774 24.9833 2.49313 24.9868 5.54707L25 19.4286C25.0035 22.4833 22.5069 24.984 19.4529 24.9868Z'
                      fill='url(#paint1_radial_314_721)'
                    ></path>
                    <path
                      d='M12.5011 17.3587C9.82268 17.3587 7.64258 15.1793 7.64258 12.5001C7.64258 9.82101 9.82268 7.6416 12.5011 7.6416C15.1796 7.6416 17.3597 9.82101 17.3597 12.5001C17.3597 15.1793 15.1796 17.3587 12.5011 17.3587ZM12.5011 9.02976C10.5876 9.02976 9.03073 10.5866 9.03073 12.5001C9.03073 14.4137 10.5876 15.9705 12.5011 15.9705C14.4147 15.9705 15.9715 14.4137 15.9715 12.5001C15.9715 10.5866 14.4147 9.02976 12.5011 9.02976Z'
                      fill='currentColor'
                    ></path>
                    <path
                      d='M17.7169 8.33834C18.2919 8.33834 18.758 7.87221 18.758 7.29722C18.758 6.72223 18.2919 6.2561 17.7169 6.2561C17.1419 6.2561 16.6758 6.72223 16.6758 7.29722C16.6758 7.87221 17.1419 8.33834 17.7169 8.33834Z'
                      fill='currentColor'
                    ></path>
                    <path
                      d='M16.6543 21.525H8.32534C5.6469 21.525 3.4668 19.3456 3.4668 16.6665V8.33755C3.4668 5.65841 5.6469 3.479 8.32534 3.479H16.6543C19.3327 3.479 21.5128 5.65841 21.5128 8.33755V16.6665C21.5128 19.3456 19.3327 21.525 16.6543 21.525ZM8.32534 4.86716C6.41177 4.86716 4.85495 6.42398 4.85495 8.33755V16.6665C4.85495 18.5801 6.41177 20.1369 8.32534 20.1369H16.6543C18.5679 20.1369 20.1247 18.5801 20.1247 16.6665V8.33755C20.1247 6.42398 18.5679 4.86716 16.6543 4.86716H8.32534Z'
                      fill='currentColor'
                    ></path>
                    <defs>
                      <radialGradient
                        id='paint0_radial_314_721'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(9.29371 25.018) scale(31.1634 31.1634)'
                      >
                        <stop stopColor='#FFDD55'></stop>
                        <stop offset='0.328' stopColor='#FF543F'></stop>
                        <stop offset='0.348' stopColor='#FC5245'></stop>
                        <stop offset='0.504' stopColor='#E64771'></stop>
                        <stop offset='0.643' stopColor='#D53E91'></stop>
                        <stop offset='0.761' stopColor='#CC39A4'></stop>
                        <stop offset='0.841' stopColor='#C837AB'></stop>
                      </radialGradient>
                      <radialGradient
                        id='paint1_radial_314_721'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(4.02288 -0.312123) scale(20.6926 13.7874)'
                      >
                        <stop stopColor='#4168C9'></stop>
                        <stop
                          offset='0.999'
                          stopColor='#4168C9'
                          stopOpacity='0'
                        ></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='Blog link'
                target='_blank'
                href='https://blog.amigoscode.com/'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='25'
                    height='25'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    viewBox='0 0 448 511.471'
                  >
                    <path
                      fill='#FF681A'
                      d='M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z'
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='LinkedIn link'
                target='_blank'
                href='https://www.linkedin.com/company/amigoscode/posts/?feedView=all'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='17'
                    viewBox='0 0 16 17'
                    fill='none'
                    className='h-9 w-9'
                  >
                    <rect
                      x='1'
                      y='1.5'
                      width='14'
                      height='14'
                      rx='7'
                      fill='#1275B1'
                    ></rect>
                    <path
                      d='M6.30928 5.34607C6.30928 5.81335 5.90426 6.19215 5.40464 6.19215C4.90502 6.19215 4.5 5.81335 4.5 5.34607C4.5 4.8788 4.90502 4.5 5.40464 4.5C5.90426 4.5 6.30928 4.8788 6.30928 5.34607Z'
                      fill='white'
                    ></path>
                    <path
                      d='M4.62371 6.81405H6.1701V11.5H4.62371V6.81405Z'
                      fill='white'
                    ></path>
                    <path
                      d='M8.65979 6.81405H7.1134V11.5H8.65979C8.65979 11.5 8.65979 10.0248 8.65979 9.10243C8.65979 8.54881 8.84883 7.99277 9.60309 7.99277C10.4555 7.99277 10.4504 8.71727 10.4464 9.27855C10.4412 10.0122 10.4536 10.7609 10.4536 11.5H12V9.02686C11.9869 7.44769 11.5754 6.72004 10.2216 6.72004C9.4177 6.72004 8.91936 7.08503 8.65979 7.41525V6.81405Z'
                      fill='white'
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                className='hover:text-white'
                title='Facebook link'
                target='_blank'
                href='https://www.facebook.com/amigoscode?_rdc=2&amp;_rdr'
              >
                <div className='lg:hover:scale-110 duration-150'>
                  <svg
                    width='29'
                    height='29'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
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
                </div>
              </a>
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8 '>
            <div className='lg:space-y-2 lg:justify-self-end group'>
              <h3 className='text-sm md:text-base font-semibold text-white text-gray-3 duration-150'>
                Product
              </h3>
              <div>
                <div className='space-x-2 py-1 flex items-center'>
                  <div className='text-gray-400 lg:hover:text-white duration-300 cursor-progress'>
                    Bootcamp
                  </div>
                  <div>
                    <div className='border flex items-center justify-center w-fit text-nowrap rounded-full bg-cyan-600 text-white border-cyan-500 py-0.5 px-1.5 animate-pulse text-xs'>
                      <p>soon</p>
                    </div>
                  </div>
                </div>
                <div className='space-x-2 py-1 flex items-center'>
                  <div className='text-gray-400 lg:hover:text-white duration-300 cursor-progress'>
                    Textbook
                  </div>
                  <div>
                    <div className='border flex items-center justify-center w-fit text-nowrap rounded-full bg-cyan-600 text-white border-cyan-500 py-0.5 px-1.5 animate-pulse text-xs'>
                      <p>soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:space-y-2 lg:justify-self-end group'>
              <h3 className='text-sm md:text-base font-semibold text-white text-gray-3 duration-150'>
                Company
              </h3>
              <div>
                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/team'
                  >
                    Team
                  </Link>
                </div>
                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/blog'
                  >
                    Blog
                  </Link>
                </div>
                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/community'
                  >
                    Community
                  </Link>
                </div>

                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/support'
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <div className='lg:space-y-2 lg:justify-self-end group'>
              <h3 className='text-sm md:text-base font-semibold text-white text-gray-3 duration-150'>
                Legal
              </h3>
              <div>
                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/terms'
                  >
                    Terms
                  </Link>
                </div>
                <div className='space-x-2 py-1 flex items-center'>
                  <Link
                    target='_self'
                    className='text-gray-400 lg:hover:text-white duration-300'
                    to='/privacy'
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-none h-[1px] bg-cyan-500/20' />
        <div className='space-y-5 md:space-y-0 md:flex md:justify-between'>
          <p className='font-semibold text-sm md:text-base'>
            Peace be upon you.
            <span className='text-lg md:text-xl animate-wave inline-block ml-2'>
              👋
            </span>
          </p>
          <p className='text-sm md:text-base text-gray-400'>
            © 2024 Talantachain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
