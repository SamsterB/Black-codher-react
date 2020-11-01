import React, { useEffect, useState } from 'react';
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
 const [bookcase,setBookcase] = useState([])
 const [count, setCount] = useState(0);

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




 const addBook = (title, id)  => {
   const newBookList = books.filter(book => book.id !== id);
   const chosenBook = books.filter(book => book.id ===id);
   setBooks(newBookList);
   setBookcase([...bookcase, ...chosenBook]);
   setCount(count +1);
   console.log(`The book ${title} was clicked`)
 }

 function removeBook (id) {
   const newBookList = books.filter(book => book.id !==id);
   setBookcase(newBookcaseList);
   setCount(count - 1);

 }

 return (
   <Router>
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
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
