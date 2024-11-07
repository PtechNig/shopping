import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = ({ query}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://eatery-web-service.onrender.com/shopping/product')
            .then(res => {
                setProduct(res.data.product);
                console.log(res.data.product);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className='product_container'>
                {
                    product.length > 0 ? (
                        product
                            .filter(item => 
                                item.category.toLowerCase().includes(query) ||
                                item.brand.toLowerCase().includes(query)
                            )
                            .map(item => {
                                const imageUrl = `https://eatery-web-service.onrender.com/${item.image}`;
                                return (
                                    <div key={item._id} className='product'>
                                        <div className='product_image'>
                                            <img
                                                src={imageUrl}
                                                alt={item.name}
                                            />
                                        </div>

                                        <div className='product_details'>
                                            <h4>{item.name}</h4>
                                            <p className='description'>{item.description}</p>
                                            <p className='price'>Price: ${item.price}</p>
                                            <a href={`Details/${item._id}`}> Details </a>
                                        </div>
                                    </div>
                                );
                            })
                    ) : (
                        <h1 className='product-error'> Network or Server Error</h1>
                    )
                }
            </div>
        </div>
    );
};

export default Products;
