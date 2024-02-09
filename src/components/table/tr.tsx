import React from 'react';
import { Product } from '../../types';
import { Button, Flex } from 'antd';

interface ProducttrProps {
    product: Product;
}

const Producttr: React.FC<ProducttrProps> = ({ product }) => {
    return (
        <tr>
            <td>{product.product_name}</td>
            <td>{product.variants[0].variant_value}</td>
            <td>
                <img
                    width={40}
                    height={40}
                    src={product.product_images[0]}
                    alt={product.product_name}
                />
            </td>
            <td>{product.category}</td>
            <td>
                <div>
                    <Flex gap="small" wrap="wrap">
                        <Button type="primary">Edit</Button>
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Flex>
                </div>
            </td>
        </tr>
    );
};

export default Producttr;
