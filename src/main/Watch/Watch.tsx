import Event from '../../img/nav-ad-dreamforce-registration@2x.png'
import tour from '../../img/wtny-resource-tile.jpeg'
import webinar from '../../img/promo-boost-productivity.jpeg'
import story from '../../img/promo-open-ai.jpeg'
import { BsArrowRight } from 'react-icons/bs'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";


const Watch = () => {
  return (
    <div className="w-full bg-thirdary pt-8 pb-16 sm:pb-8">
      <div className="layer-center ">
        <h3 className="mb-4 mt-8 text-center text-3xl font-bold tracking-tight text-black sm:text-2xl">Take a deeper dive into a new way to work</h3>

        {/* desktop */}
        <div className="grid grid-cols-4 gap-9 mt-8 mb-4 nr:grid-cols-2 sm:hidden " >

          <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-end'>
            <div className=" ">
              <figure className='relative h-52 nr:h-figueHeight'>
                <img src={Event} alt="event" className='figureImg ' />
              </figure>
              <header className='px-3 mt-1'>
                <span className='text-sm text-gray-500 '>Event</span>
                <h3 className='leading-7 text-2xl text-black font-bold mt-1 mb-4 tracking-tight '>Ready for the future of AI in Slack?</h3>
              </header>
            </div>
            <div className="flex items-center px-3 h-12 justify-between ">
              <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
              <BsArrowRight className='text-2xl font-bold text-lightblue' />
            </div>
          </a>

          <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-start'>
            <div className=" ">
              <figure className='relative h-52 nr:h-figueHeight'>
                <img src={tour} alt="event" className='figureImg ' />
              </figure>
              <header className='px-3 mt-1'>
                <span className='text-sm text-gray-500 '>On-demand</span>
                <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                  Big things are launching. Relieve the highlights of World Tour New York!
                </h3>
              </header>
            </div>
            <div className="flex items-center px-3 h-12 justify-between ">
              <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
              <BsArrowRight className='text-2xl font-bold text-lightblue' />
            </div>
          </a>
          <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-end'>
            <div className=" ">
              <figure className='relative h-52 nr:h-figueHeight'>
                <img src={story} alt="event" className='figureImg ' />
              </figure>
              <header className='px-3 mt-1'>
                <span className='text-sm text-gray-500 '>Customer Story</span>
                <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                  How OpenAI expands ChatGPT with Slack.
                </h3>
              </header>
            </div>
            <div className="flex items-center px-3 h-12 justify-between ">
              <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
              <BsArrowRight className='text-2xl font-bold text-lightblue' />
            </div>
          </a>
          <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-star'>
            <div className=" ">
              <figure className='relative h-52 nr:h-figueHeight'>
                <img src={webinar} alt="event" className='figureImg ' />
              </figure>
              <header className='px-3 mt-1'>
                <span className='text-sm text-gray-500 '>Webinar</span>
                <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                  Top Slack tips to boost productivity
                </h3>
              </header>
            </div>
            <div className="flex items-center px-3 h-12 justify-between ">
              <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
              <BsArrowRight className='text-2xl font-bold text-lightblue' />
            </div>
          </a>
        </div>



        {/* mobile */}

        <Swiper
          spaceBetween={900}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper hidden sm:block"
        >
          <SwiperSlide className='flex justify-center '>

            <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-end figure-watch'>
              <div className=" ">
                <figure className='relative  sm:h-figueHeightM'>
                  <img src={Event} alt="event" className='figureImg ' />
                </figure>
                <header className='px-3 mt-1'>
                  <span className='text-sm text-gray-500 '>Event</span>
                  <h3 className='leading-7 text-2xl text-black font-bold mt-1 mb-4 tracking-tight '>Ready for the future of AI in Slack?</h3>
                </header>
              </div>
              <div className="flex items-center px-3 h-12 justify-between ">
                <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
                <BsArrowRight className='text-2xl font-bold text-lightblue' />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center '>
            <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-start figure-watch'>
              <div className=" ">
                <figure className='relative sm:h-figueHeightM'>
                  <img src={tour} alt="event" className='figureImg ' />
                </figure>
                <header className='px-3 mt-1'>
                  <span className='text-sm text-gray-500 '>On-demand</span>
                  <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                    Big things are launching. Relieve the highlights of World Tour New York!
                  </h3>
                </header>
              </div>
              <div className="flex items-center px-3 h-12 justify-between ">
                <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
                <BsArrowRight className='text-2xl font-bold text-lightblue' />
              </div>
            </a>
          </SwiperSlide >
          <SwiperSlide className='flex justify-center '>
            <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-end figure-watch'>
              <div className=" ">
                <figure className='relative sm:h-figueHeightM'>
                  <img src={story} alt="event" className='figureImg ' />
                </figure>
                <header className='px-3 mt-1'>
                  <span className='text-sm text-gray-500 '>Customer Story</span>
                  <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                    How OpenAI expands ChatGPT with Slack.
                  </h3>
                </header>
              </div>
              <div className="flex items-center px-3 h-12 justify-between ">
                <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
                <BsArrowRight className='text-2xl font-bold text-lightblue' />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center '>
            <a href="" className='bg-white flex flex-col justify-between boxShadowCard hover:boxShadowCardHover nr:max-w-figureWidth nr:justify-self-star figure-watch'>
              <div className=" ">
                <figure className='relative sm:h-figueHeightM'>
                  <img src={webinar} alt="event" className='figureImg ' />
                </figure>
                <header className='px-3 mt-1'>
                  <span className='text-sm text-gray-500 '>Webinar</span>
                  <h3 className='leading-7 text-2xl text-black font-bold mb-4  mt-1 tracking-tight'>
                    Top Slack tips to boost productivity
                  </h3>
                </header>
              </div>
              <div className="flex items-center px-3 h-12 justify-between ">
                <p className='uppercase text-sm font-bold text-lightblue'>watch on-demand</p>
                <BsArrowRight className='text-2xl font-bold text-lightblue' />
              </div>
            </a>
          </SwiperSlide>

        </Swiper>


      </div>
    </div>
  )
}

export default Watch