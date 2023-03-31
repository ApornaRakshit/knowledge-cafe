import React, { useEffect, useState } from "react";
import './Blog.css';
import Product from "../Product/Product";

const Blog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="Blog-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Bookmarked blog</h4>
            </div>
        </div>
    );
};

export default Blog;