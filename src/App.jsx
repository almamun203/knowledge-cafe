

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);


  const handleAddBookmark = blog=>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-between'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks> 
      </div>
      
    </>
  )
}

export default App
