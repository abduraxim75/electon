import React from 'react';
import { Carousel } from 'antd';
import brand4 from "../../assets/brand-4.png"
import brand5 from "../../assets/brand-5.png"
import brand6 from "../../assets/brand-6.png"
import brand7 from "../../assets/brand-7.png"
import brand8 from "../../assets/brand-8.png"
const Autocarousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel autoplay={true} dots={false} waitForAnimate={false}  infinite={true} afterChange={onChange}>
            <div className='u'>
                <div className='o'>
                    <div>
                        <img src={brand4} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt='' />
                    </div>
                    <div>
                        <img src={brand6} alt="" />
                    </div>
                    <div>
                        <img src={brand7} alt="" />
                    </div>
                    <div >
                        <img src={brand8} alt="" />
                    </div>
                </div>
            </div>
            <div className='u'>
                <div className='o'>
                    <div>
                        <img src={brand4} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt='' />
                    </div>
                    <div>
                        <img src={brand6} alt="" />
                    </div>
                    <div>
                        <img src={brand7} alt="" />
                    </div>
                    <div>
                        <img src={brand8} alt="" />
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Autocarousel;