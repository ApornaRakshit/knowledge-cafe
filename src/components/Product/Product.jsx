import React from 'react';
import './Product.css';

const Product = (props)=>{
  const {img,name,date,description}= props.product;
    return(
        <div class='product'>
          <img src={img} alt="" />
          <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>{date}</p>
            <h2>{description}</h2>
          </div>
        </div>
    );
};

export default Product;