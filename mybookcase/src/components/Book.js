import React from 'react';
const Book = (props) => {
    //let { id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = props.book;
 const info = props.book.volumeInfo;
 //const { volumeInfo } = props.book;

//const { volumeInfo: { description} } = props.book; 
const {id, volumeInfo: {title, description, imageLinks: {thumbnail} } } = props.book;

const renderAmount = () => {
    if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
        return '£' + props.book.saleInfo.listPrice.amount;
    }
    return;
}  
return (
 <div>
     <img src ={thumbnail} />
     <button onClick= {()=> props.addBook(title,id)} style ={{
         font: 'inherit',
         cursor: 'pointer',
         border: '1px solid black',
         background: 'black',
         color: 'white',
         padding: '0.5rem 2rem'
     }}> Add Book</button>:
 <h2>{title}</h2>
 <p>{renderAmount()}</p>
    <p>{description}</p>
 </div>
 );
}
export default Book;