import { Button } from 'antd';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import instance from '../../helpers/axios/axios';
import { Product } from '../../types';
import { Eye, Liked, Shopping } from '../../utils/svg';


const HomeProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const response: AxiosResponse = await instance("/product/all");
                setProducts(response.data.payload.products)
            } catch (error: any) {
                console.log(error);

            }
        }
        fetchproduct();
    }, [])
    return (
        <div className="home-products__container">
            <div className="home-contents">
                <h2>
                    Popular products
                </h2>
                <ul className='home__product-list'>
                    <li>
                        <Button>Cameras</Button>
                    </li>
                    <li>
                        <Button>Laptops</Button>
                    </li>
                    <li>
                        <Button>Tablets</Button>
                    </li>
                    <li>
                        <Button>Mouse</Button>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='home-product-list'>
                    {
                        products.map((product: Product) => (
                            <li key={product._id}>
                                <img src={product.product_images[0]} />
                                <h4 className='pro-h4'>
                                    {product.product_name}
                                </h4>
                                <p className='pro-paragraph'>
                                    ${product.variants[0].variant_sale_price ??
                                    product.variants[0].variant_original_price}
                                </p>
                                <div className='like-pro__btn'>
                                    <button  className='pro-liked-btn'>
                                        <Liked/>
                                    </button>
                                </div>
                                    <div className='pro-btns '>
                                        <button className='shop-pro__btn'>
                                            Add To Cart <Shopping />
                                        </button>
                                        <button className='eye-btn__pro'>
                                            <Eye />
                                        </button>
                                    </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default HomeProducts