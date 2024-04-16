
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa6';
 
import proPic from "../assets/profile.jpg"


// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
        <h1 className="text-5xl font-bold text-center mb-10 leading-snug">Other Items</h1>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores impedit, adipisci sit non ullam temporibus pariatur eligendi fugit dolores.</p>
                    <div>
                    <img className='h-12 w-12 rounded-full mb-4' src={proPic} alt="" />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
            </div>
        </SwiperSlide>
    
      </Swiper>
        </div>
    </div>
  )
}

export default Review