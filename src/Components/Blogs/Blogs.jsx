import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
      fetch('blog.json')
      .then(res=>res.json())
      .then(data=>setBlogs(data));  
    },[])
    return (
        <div className='md:w-2/3 mx-8'>
            
            {
                blogs.map((blog,index)=><Blog 
                    key={index} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleReadingTime={handleReadingTime}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}
export default Blogs;