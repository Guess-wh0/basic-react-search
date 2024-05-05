// import React from 'react';
import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('cars')

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  const changeTerm = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Image Search</label>
          <input type='text'
            value={term}
            onChange={ changeTerm } />
            {term}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
