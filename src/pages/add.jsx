import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  let [book, setBook] = useState({
    title: '',
    desc: '',
    pic: '',
  });

  let nav = useNavigate();

  const handleChange = (e) => {
    // setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/books', book);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='add'>
      <div className='container'>
        <div className='title'>
          <p>Add</p>
        </div>
        <form>
          <input
            type='text'
            placeholder='Title'
            className='booktitle'
            name='title'
            onChange={handleChange}
          />
          <textarea
            placeholder='Description'
            cols='10'
            rows='10'
            className='desc'
            name='desc'
            onChange={handleChange}
          ></textarea>
          <input
            type='text'
            placeholder='Cover URL'
            className='cover'
            name='pic'
            onChange={handleChange}
          />
          <button className='addButton' onClick={handleClick}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
