const SingleTestimonial = () => {
  return (
    <>
      <div className='py-6 space-y-4 md:space-y-6 text-center'>
        <div className=''>
          <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
            Testimonial
          </p>
          <h2 className='text-xl md:text-4xl font-semibold mb-3 text-gray-900'>
            From Fopa Developer Advocate @Rust
          </h2>
        </div>
      </div>
      <div className='relative mx-auto my-20 flex max-w-xl flex-col items-center justify-center px-10 py-20'>
        <svg
          className='absolute -top-10 -left-10 text-9xl opacity-10'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z'
          />
        </svg>
        <h1 className='mb-6 text-4xl font-black text-white'>Amazing!</h1>
        <p className='max-w-md text-center text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aperiam placeat esse incidunt blanditiis maxime at quisquam ipsum quia
          voluptates?
        </p>

        <div className='-z-10 absolute overflow-hidden h-full w-full flex justify-center'>
          <svg
            className='w-[40rem] sm:w-full shrink-0'
            viewBox='0 0 225 140'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {' '}
            <path
              d='M2.00003 57.0391C-3.60997 75.6991 2.82003 103.009 17.37 117.559C31.91 132.109 54.95 139.839 76.94 137.559C92.8 135.909 107.42 129.519 122.71 125.509C138 121.499 155.69 120.159 168.97 127.889C175.82 131.869 181.35 138.159 189.42 139.599C196.67 140.899 204.25 137.719 209.18 132.909C214.1 128.099 216.79 121.879 218.85 115.679C224.65 98.2691 226.3 79.8191 223.68 61.8391C221.84 49.2191 217.61 36.3491 207.83 26.8991C192.99 12.5491 169.11 9.13909 147.21 6.14909C127.53 3.45909 107.79 0.419095 87.87 0.589095C67.95 0.749095 47.5701 4.3391 30.9601 13.9091C14.3401 23.4691 2.05003 39.6891 2.00003 57.0391Z'
              fill='url(#paint0_linear_15_6)'
            />{' '}
            <defs>
              {' '}
              <linearGradient
                id='paint0_linear_15_6'
                x1='-40.5'
                y1='78.5'
                x2='225'
                y2='53'
                gradientUnits='userSpaceOnUse'
              >
                {' '}
                <stop stopColor='#0891b2' />{' '}
                <stop offset='1' stopColor='#006f8c' />{' '}
              </linearGradient>{' '}
            </defs>{' '}
          </svg>
        </div>
        <div className='mt-4 flex items-center rounded-xl bg-white px-10 py-4'>
          <img
            className='block h-10 w-10 max-w-full flex-shrink-0 rounded-full object-cover align-middle'
            src='https://senjaio.b-cdn.net/public/avatar/d2726605-c109-4b1c-814d-b26791a1a0e5_josh-1.jpg?width=900'
            alt=''
          />
          <div className='ml-3'>
            <p className='text-lg font-semibold text-slate-700'>Jessica Elba</p>
            <p className='mt-px text-xs text-slate-700'>CEO, Salesforce</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleTestimonial
