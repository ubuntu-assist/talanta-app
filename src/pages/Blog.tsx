import { CallToAction } from '../components'
import { SlideTabsComponent } from '../designSystem/ui/SlideTabs'

const Blog = () => {
  return (
    <>
      <div className='px-2.5 md:py-24 py-12 w-full'>
        <div className='max-w-[1400px] mx-auto'>
          <div className='py-6 space-y-4 md:space-y-6 text-center'>
            <div className=''>
              <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
                Our blog
              </p>
              <h2 className='text-xl md:text-4xl text-gray-900 font-semibold mb-3'>
                Welcome to our weekly newsletter
                {/* <!-- --> */}
              </h2>
              <p className='md:text-lg max-w-2xl text-gray-700 mx-auto'>
                Curated Blockchain Engineering and Smart Contracts Security
                content to help you succeed.
              </p>
            </div>
          </div>

          <SlideTabsComponent />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto'>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQE13HGyCPRnZA/feedshare-shrink_800/feedshare-shrink_800/0/1721755111896?e=1729123200&v=beta&t=XtVin2vGNMUtgk0DjEHqi8TkkUdykH7ZeCE5BglRyuU'
                alt='Blog Post 1'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  10 FEB 2023 | BY JOHN DOE
                </span>
                <h3 className='text-xl font-bold text-white'>
                  A Guide to Igniting Your Imagination
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQGPewob71kQGw/feedshare-shrink_800/feedshare-shrink_800/0/1721992207008?e=1729123200&v=beta&t=ha68fl4DPj3Z4VzuC57dk1k6rPD7073bC3hoGIuBK1I'
                alt='Blog Post 2'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  7 JUN 2023 | BY STAEL FOUWA
                </span>
                <h3 className='text-xl font-bold text-white'>
                  Hacks to Supercharge Your Day
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQEZTyn8dExwtg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721991799964?e=1729123200&v=beta&t=31bUMmQqmcQw9npE390Iz37fl77sbQEFVZtyscSFqzs'
                alt='Blog Post 3'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  5 OCT 2023 | BY DUCLAIR FOPA
                </span>
                <h3 className='text-xl font-bold text-white'>
                  Trends and Predictions
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQFGG8RoTNwEFA/feedshare-shrink_800/feedshare-shrink_800/0/1723486030071?e=1729123200&v=beta&t=Isx-S6C12Xo68S4pIKi9AiodWs-H71C8wCTvh2f9k-4'
                alt='Blog Post 3'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  5 OCT 2023 | BY DUCLAIR FOPA
                </span>
                <h3 className='text-xl font-bold text-white'>
                  Trends and Predictions
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQGi6kBFKxf8dg/feedshare-shrink_800/feedshare-shrink_800/0/1723924516188?e=1729123200&v=beta&t=JGZnUCx_YbKvY29LUilMfY2p76dQsmXKjYF4rMePvUs'
                alt='Blog Post 3'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  5 OCT 2023 | BY DUCLAIR FOPA
                </span>
                <h3 className='text-xl font-bold text-white'>
                  Trends and Predictions
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60'>
              <img
                src='https://media.licdn.com/dms/image/v2/D4E22AQE7eMbujzIsSw/feedshare-shrink_800/feedshare-shrink_800/0/1725980409257?e=1729123200&v=beta&t=sE0t2jZF9dAvZsHvmmRERpqSksj9nIuCZGqkdCmdDKw'
                alt='Blog Post 3'
                className='w-full h-96 object-cover group-hover:scale-110 transition-all duration-300'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 z-20'>
                <span className='text-sm block mb-2 text-yellow-400 font-semibold'>
                  5 OCT 2023 | BY DUCLAIR FOPA
                </span>
                <h3 className='text-xl font-bold text-white'>
                  Trends and Predictions
                </h3>
                <div className='mt-4'>
                  <p className='text-gray-200 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  )
}
export default Blog
