import React, { useState } from 'react';
import { useBooks } from '../context/books';

const BookCreate: React.FC = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooks();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button">Create!</button>
        </form>
      </div>
  );
};

export default BookCreate;
