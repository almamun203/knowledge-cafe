import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
const {title}=bookmark;
    return (
        <div>
           <h3 className='text-xl font-bold rounded-lg p-4 m-4 shadow-xl bg-red-100 '>{title}</h3> 
        </div>
    );
};

Bookmark.propTypes={
  bookmark:PropTypes.object  
}

export default Bookmark;