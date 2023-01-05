import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.scss';
import img from '../ungabg.jpg';

export default function View() {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
    // console.log(books);
  }, []);

  const handleDelete = async (id) => {
    try {
      //   await axios.delete(`http://localhost:8800/books/${id}`);
      await axios.delete('http://localhost:8800/books/' + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='view'>
      <div className='header'>
        <p className='title'>Library</p>
        <p className='caption'>
          {'These are the books available in our temple of wisdom ;)'}
        </p>
      </div>
      <div className='container'>
        {books.map((book) => (
          <div className='bookContainer' key={book.id}>
            <div className='image'>
              {/* <img src={book.pic} alt='cover' /> */}
              <img
                src={img}
                alt='cover'
                style={{ height: '90%', width: '90%' }}
              />
            </div>
            <div className='title'>
              <p>{book.title}</p>
            </div>
            <div className='description'>
              <p>{book.desc}</p>
            </div>
            <div className='buttons'>
              <Link to={`/update/${book.id}`}>
                <button className='updateButton' component={Link}>
                  Update
                </button>
              </Link>
              <button
                className='deleteButton'
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to='/add'>
          <button id='addButton' component={Link}>
            Add New Book
          </button>
        </Link>
      </div>
    </div>
  );
}
