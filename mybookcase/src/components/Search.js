import React, { useState } from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Container } from 'react-bootstrap';

const Search = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.findBooks(props.keyword);
    }
    return (
        <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Group controlId="searchKeyword">
                    <Form.Label>Enter Search</Form.Label>
                    <Form.Control type="keyword" placeholder="Enter keyword" value={props.keyword} 
                    onChange={(e) => { props.setKeyword(e.target.value) }}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Container>
    );
};

export default Search;