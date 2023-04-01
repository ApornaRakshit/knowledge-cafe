import React from 'react';

const SingleCard = ({blogs})=>{
    console.log(blogs)
    return(
        <div>
             <div className="blog-card card w-100 m-auto col-md-6">
                    <div className="blog-poster w-100 m-auto">
                    <img className='w-100' src={blogs.img} alt="" />
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
                    <div className="dateAndTime ">
                    <p>{blogs.publishDate}</p>
                    </div></div></div>
                    <p>{blogs.readTime}</p>
                     </div>
                     <h5>{blogs.description}</h5>
                     <button className='btn btn-info w-75'>Mark as read</button>
                     </div>
        </div>
    );
};

export default SingleCard;