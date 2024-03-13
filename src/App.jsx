

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);


  const handleReadingTime=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }

  const handleAddBookmark = blog=>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-between'>
      <Blogs handleAddBookmark={handleAddBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks> 
      </div>
      
    </>
  )
}

export default App
