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
        <div>
            <div className="blog-container">
            
                {
                    
                    blogs.map((blogs)=>
                    <SingleCard  handleWatchTime={handleWatchTime} handleAddToCart={handleAddToCart} blogs={blogs} > </SingleCard>
                )}
            
            <h5>Bookmarked Blogs : {cart.length}</h5>
            </div>
            
        </div>
    );
};

export default Home;