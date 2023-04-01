import React, {useEffect,useState} from 'react';

const BookMarkCart = ({readTime})=>{
    const [time,setTime]=useState(readTime);
    useEffect(()=>{
         const getReadTimeFromStorage=localStorage.getItem("readTime");
         setTime(getReadTimeFromStorage)
    },[readTime])

    return (
        <div>
        <div className="mb-1 text-center">
        <h6>Spend time on read: {time} min</h6>
        </div>
        
        </div>
      );
    };

export default BookMarkCart;