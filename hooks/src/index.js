import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import BookCounter from './BookCounter';
import books from './books.json';
const formatter = new Intl.NumberFormat('en-GB', {
 style: 'currency',
 currency: 'GBP'
})
const book = books[0];

const renderList = () => {
    const list = [];
    for (let i = 0; i < books.length; i++) {
        let {id, volumeInfo: { title, authors, description} } = books[i];
        list.push(<li id={books[0].id}>{title} - = {authors.map(author => (author))}
            {books[i].volumeInfo.imageLinks && books[i].volumeInfo.imageLinks.smallThumbnail && <img src={books[i].volumeInfo.imageLinks.smallThumbnail} />
    }</li>);
 }
    return list; 
}
const element = <Fragment>
 <ul>
     {renderList()}
 </ul>
 </Fragment>;
ReactDOM.render(element,document.getElementById('root'));