
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const BookCard = ({ headline, books = [] }) =>{
 
    return (
        <div className='my-16 px-4 lg:px-24 flex flex-col justify-center items-center'>
            <h2 className='text-4xl md:text-5xl text-black text-center font-bold my-2 md:my-5'>{headline}</h2>
            {/* cards */}
            <div className='flex justify-center items-center mt-14 w-3/4 md:w-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper py-10"
                    
                >
                    
                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                
                                <div className='relative flex justify-center items-center'>
                                    <img className='rounded-t-xl ' src={book.imageURL} alt="" />
                                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                        <FaCartShopping className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                                <div className=''>
                                    <div>
                                        <h3 className=' font-bold text-black'>{book.bookTitle}</h3>
                                        <p className='font-semibold text-gray-800'>{book.authorName}</p>
                                    </div>
                                    <div>
                                        <p>${book.price ? book.price : '10'}</p>
                                    </div>
                                </div>
                            </Link> 
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BookCard;