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
 <h2>{title}</h2>
 <p>{renderAmount()}</p>
    <p>{description}</p>
    <button onClick= {()=> props.addBook(title,id)}> addBook</button>
 </div>
 );
}
export default Book;