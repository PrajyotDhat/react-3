import React, {useState } from 'react'
import useBookContext from '../hooks/useBookContext';

function BookCreate() {

     const[title,setTitle]=useState('');
     const{createBook}=useBookContext();

     const handleChange=(event)=>{
        setTitle(event.target.value);
     }

     const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
     }

  return (
    <div>
    <form onSubmit={handleSubmit}>
     <label>Title</label>
        <input value={title} onChange={handleChange} />
     <button>Create!</button>
    </form>
      
    </div>
  )
}

export default BookCreate
