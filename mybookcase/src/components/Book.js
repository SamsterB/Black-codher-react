import React from 'react';
import '...App.css'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import button from 'react-bootstrap/button'

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
    <Container>
    <Row classname="align-items-center justify-content-md-center book">
        <h2 className="bookTitle">{title}</h2>
    </Row>    

    <Row className="align-items-center justify-content-md-center book">
        <h3 className="bookAuthor">by {authors.join(",")}</h3>
    </Row>

    <Row classname="align-items-center justify-content-md-center book">
        <Col lg="2">
        <img src= {smallThumbnail} alt = {title}/>
        </Col>
        <Col lg="8">
        <p className="bookDescription">{description}</p>   
        </Col>
        <Col lg="2">
        <p className="bookprice">Retail Price: £{listPrice.amount && listprice.amount}</p>
        {props.addBook && ( 
            <Button variant="warning" onClick={()=>props.addBook(title,id)}>Add +</Button>
        )}    
        {props.removeBook && ( 
            <Button variant="warning" onClick={()=>props.removeBook(title,id)}>Add +</Button>
        )}    
        </Col>
        </Row>
    </Container>
 );
}
export default Book;