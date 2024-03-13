import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
            
        <div className='md:w-1/3 mx-8 bg-indigo-100 mt-4 rounded-xl'>
        <div>
                <h3 className='text-center text-xl text-indigo-500 font-bold   rounded-xl p-4  border-2 border-indigo-600 bg-green-100'>Spent On Reading:{readingTime}</h3>
            </div>
            <h3 className='text-center text-xl text-indigo-500 font-bold   rounded-xl p-4 mx-4'>Bookmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;