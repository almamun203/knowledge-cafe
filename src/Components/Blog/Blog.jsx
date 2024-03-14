import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddBookmark,handleReadingTime}) => {
    
    const {Id,title,cover_photo,author,author_img,posted_date,reading_time,hashtags}= blog;
    return (
        <div >
            
            <img src={cover_photo} alt="" />
            <div className='flex justify-between my-4'>
                <div className='flex gap-2'>
                    <img className='w-[50px] rounded-full' src={author_img} alt="" />
                    <div>
                    <h3 className='font-bold'>{author}</h3>
                    <p className='text-xs'>{posted_date}</p>
                    </div>
                </div>
              <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold'>{reading_time} min read</span>
              <button className='text-violet-500 ' onClick={()=>handleAddBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>         
            </div>
            <h2 className="text-3xl text-violet-500 font-bold mb-4">{title}</h2>
            <p className='text-xs font-semibold mb-2'>{hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span> )}</p>
            <p onClick={()=>handleReadingTime(Id,reading_time)} className='text-xs text-blue-600 mb-4'><u>mark as read</u></p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blog;