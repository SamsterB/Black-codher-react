import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import styled from 'styled-components';
import About from './pages/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

 const [books, setBooks] = useState(data);
 const [keyword, setKeyword ] = useState('');
 const [count, setCount] = useState(0);

 async function findBooks(value) {
  const results = await
 fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
 pe=books&projection=lite`).then(res => res.json());
  if (!results.error) {
  setBooks(results.items);
  }
 }



 const addBook = (title, id)  => {
   const newBookList = books.filter(book => book.id !== id);
   setBooks(newBookList);
   console.log(`The book ${title} was clicked`)
 }

 function removeBook (id) {
   const newBookList = books.filter(book => book.id !==id);


 }

 return (
   <Router>
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Header />
          <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
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
