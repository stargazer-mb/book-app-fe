import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Update() {
  const [book, setBook] = useState({});
  const location = useLocation();
  const bookID = location.pathname.split('/')[2];
  //   console.log(bookID);
  const nav = useNavigate();

  //   useEffect(() => {
  //     const fetchBook = async (id) => {
  //       try {
  //         const res = await axios.get('http://localhost:8800/books/' + id);
  //         setBook(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchBook(bookID);
  //     console.log(book);
  //   }, []);

  const handleChange = (e) => {
    // setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8800/books/' + bookID, book);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='update'>
      <div className='container'>
        <div className='title'>
          <p>Update</p>
        </div>
        <form>
          <input
            type='text'
            placeholder='Title'
            name='title'
            className='booktitle'
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
          <button className='updateButton' onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
