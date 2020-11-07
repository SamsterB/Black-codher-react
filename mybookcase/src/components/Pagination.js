import React from 'react'

const Pagination = ({booksPerPage, totalBooks,paginate}) => {
    const pageNumbers =[];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleSubmit =(event,number) => {
        event.preventDefault();
        paginate(number)
    }

    return (
     <nav> 
         <ul className='pagination'>
           {pageNumbers.map(number => (
             <li key={number} className='page-item'>
             <a onClick={event => handleSubmit(event, number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
           ))}   
        </ul>
     </nav>
    );
};

export default Pagination