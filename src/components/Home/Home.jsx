import React, { useEffect,useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleWatchTime})=>{
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then (data=>setBlogs(data))
    },[])
    return(
        <div>
            <div className="blog-container">
                {
                    blogs.map((blogs)=>
                    <SingleCard handleWatchTime={handleWatchTime} blogs={blogs}></SingleCard>
                )}
            </div>
        </div>
    );
};

export default Home;