

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 mx-8'>
            <h3>Bookmarked Blogs:{bookmarks.length}</h3>
        </div>
    );
};

export default Bookmarks;