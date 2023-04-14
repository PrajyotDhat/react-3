import React, { useState } from 'react'
import BookEdit from './BookEdit';
import useBookContext from '../hooks/useBookContext';

function BookShow({book,onDelete,onEdit}) {
   const [showEdit,setShowEdit]=useState(false);
   const {deleteBookById}=useBookContext();

const handleDeleteClick=()=>{
    deleteBookById(book.id);
}

const handleEditClick=()=>{
  setShowEdit(!showEdit);
}

const handleSubmit=()=>{
    setShowEdit(false);
    
}

   let content = <h3>{book.title}</h3>
   if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
   }


  return (
    <div>
      <div>
        {content}
      </div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      <div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow
