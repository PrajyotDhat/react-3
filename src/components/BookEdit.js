import React, { useState } from 'react'
import useBookContext from '../hooks/useBookContext';


function BookEdit({book,onSubmit}) {

  const[title,setTitle]=useState(book.title);
   const {editBookById} =useBookContext();

  const handleChange=(event)=>{
    setTitle(event.target.value);
  } ;

  const handleSubmit=(event)=>{
    event.preventDefault();
    editBookById(book.id,title);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>\
        <input value={title}  onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default BookEdit
