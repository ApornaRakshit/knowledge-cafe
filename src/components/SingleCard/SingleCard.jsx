import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ blogs, handleWatchTime,handleAddToCart}) => {
     
    return (
        <div>
            <div className="blog-card card w-100 m-auto col-md-6">
                <div className="blog-poster w-100 m-auto">
                    <img className='w-100' src={blogs.img}height="400" alt="" />
                </div>
                <h4>{blogs.blogTitle}</h4>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'><img
                        alt=""
                        src={blogs.authorImg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                    />{' '}
                        <div>
                            <h6>{blogs.authorName}</h6>
                            <div className="dateAndTime">
                            <p>{blogs.publishDate}</p>

                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <p >{blogs.readTime} min read</p>
                        <button onClick={()=>handleAddToCart(blogs)} className='btn btn-info btn-light text-start'><FontAwesomeIcon icon={faBookmark} /></button>
                       
                    </div>
                </div>
                <h5>{blogs.description}</h5>
                <button onClick={() => handleWatchTime(blogs.readTime)} className='btn btn-info btn-light text-start w-25'>Mark as read</button>
            </div>
        </div>
    );
};

export default SingleCard;

