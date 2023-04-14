import React from 'react'
import BookShow from './BookShow'
import useBookContext from '../hooks/useBookContext';

function BookList() {
       const {books}=useBookContext();

    const renderedBooks= books.map((book)=>{
        return <BookShow key={book.id} book={book}/>
    });

  return (
   <div>
    {renderedBooks}
    </div>
  )
}

export default BookList
