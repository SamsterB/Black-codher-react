import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import BookList from './components/BookList';
import data from './models/books.json';
import Stylesheet from './components/Stylesheet';
const App = (props) => {
 const [books,setBooks] = useState(data);

 const addBook = (title, id)  => {
   const newBookList = books.filter(book => book.id !== id);
   setBooks(newBookList);
   console.log(`The book ${title} was clicked`)
 }

 return (
   <Router>
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Header/>
          <BookList books={books} addBook={addBook} />
        </React.Fragment>
      )}/> 
    
      <Route exact path="/bookcase" render ={() => (
        <React.Fragment>
          < Header/>
         </React.Fragment>
      )}/>
      </Router>
 
 );
}

export default App;
