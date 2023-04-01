import React, { useEffect,useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleWatchTime})=>{
    const [blogs,setBlogs]=useState([]);
    const [cart,setCart]= useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then (data=>setBlogs(data))
    },[]);

    const handleAddToCart=(blogs)=>{
        const newCart = [...cart,blogs];
        setCart(newCart);
    };
    
    return(
        <div className='allBlogs'>
            
            <div className="blog-container">
                {
                blogs.map((blogs)=>
                <SingleCard
                key={blogs.id}
                handleWatchTime={handleWatchTime}
                handleAddToCart={handleAddToCart}
                blogs={blogs} > </SingleCard>
                )}
            </div>
            <div className='cart-container card'>
               <h5>Selected item: {cart.length}</h5>
               {cart.map((blog) => (
                <h4 key={blog.id}><li>{blog.description}</li></h4>
               ))}
            </div>
        </div>
    );
};

export default Home;