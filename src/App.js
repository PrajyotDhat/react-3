import React, { useEffect, useContext } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './components/context/Books';

function App() {
  const {fetchbooks}= useContext(BooksContext);

useEffect(()=>{
  fetchbooks();
  },[]);


    // console.log(response)
    // const updatedBooks=[
    //   ...books,
    //   {id:Math.round(Math.random()*9999),
    //     title}
    // ];
    // setBooks(updatedBooks);


  return (
    <div>
    <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  )
}

export default App

