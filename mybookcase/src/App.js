import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

 const [books, setBooks] = useState(data);
 const [keyword, setKeyword ] = useState('');
 const [bookcase,setBookcase] = useState([])
 const [count, setCount] = useState(0);
 const [currentPage, setCurrentPage] = useState(1);
 const [booksPerPage, setBooksPerPage]= useState(5);

 useEffect (() => {
   document.title = `${count} Book(s) Added to Bookcase`;
 });
 
 async function findBooks(value) {
  const results = await
 fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
 pe=books&projection=lite`).then(res => res.json());
  if (!results.error) {
  setBooks(results.items);
  }
 }


 function addBook (title, id)  {
   const newBookList = books.filter(book => book.id !== id);
   const chosenBook = books.filter(book => book.id ===id);
   setBooks(newBookList);
   setBookcase([...bookcase, ...chosenBook]);
   setCount(count +1);
   console.log(`The book ${title} was clicked`)
 }

 function removeBook (id) {
  const newBookcaseList = bookcase.filter(book => book.id !== id);
   setBookcase(newBookcaseList);
   setCount(count - 1);

 }

 const indexOfLastBook = currentPage * booksPerPage;
 const indexOfFirstBook = indexOfLastBook - booksPerPage;
 const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

 return (
   <Router>
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Header />
          <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
          <BookList books={books} addBook={addBook} />
        </React.Fragment>
      )}/> 
    
<Route exact path ="/About" render ={()=> (
  <React.Fragment>
  <Header/>
  <About/>
  </React.Fragment>
)}
/>


      <Route exact path="/bookcase" render ={() => (
        <React.Fragment>
          < Header/>
          <p className="countText">{count} Book(s) Added To Bookcase</p>
          <BookList books={bookcase} removeBook={removeBook} />
         </React.Fragment>
      )}/>
      </Router>
 
 );
}

export default App;
