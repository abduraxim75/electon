import { useState, useEffect } from 'react';
import { Index } from '../../types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore  from 'swiper';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Button } from '../../utils/button';

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
    const [products, setProducts] = useState<Index[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: Response = await fetch('http://localhost:3000/product');
                const data: Index[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='carousel'>
            <Swiper loop={true} speed={500} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} className='mySwiper'>
                {products.map((product: Index) => (
                    <SwiperSlide key={product.id}>
                        <div className='swper-slide__content'>
                            <p>{product.product_name}</p>
                            <Button btnsize='large' className='btn' type='button'>
                                Shop Now
                            </Button>
                            <Button btnsize='more' className='btn' type='button'>
                                View More
                            </Button>
                            <div className='swiper-slide-container'>
                                <img src={product.image} alt='' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
