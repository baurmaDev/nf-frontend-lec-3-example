import React, { useState } from 'react';
import { useBooks } from '../context/books';

interface BookEditProps {
  book: { id: number; title: string };
  onSubmit: () => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooks();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Save</button>
      </form>
  );
};

export default BookEdit;
