import React from 'react';
import Book from './Book';

const BookList = (props) => {
   
   
   
    return (
    <div>
    {props.books.map(book => <Book key={book.id} books={book} addBook= {props.addBook} removeBook= {props.removeBook} />)}
    </div>
    );
   }
   export default BookList;
   