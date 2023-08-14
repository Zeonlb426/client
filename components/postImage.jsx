
import Image from 'next/image'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"



export default function PostImage({images}) {

    return (
        <div className=''>
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className=""
            >
                {images.map((url, index) => (
                    <SwiperSlide key={index} virtualIndex={index} className='rect-img-container'>
                        <Image src={url} className='rect-img' unoptimized fill alt='Post'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}