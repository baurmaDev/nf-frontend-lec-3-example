import React from 'react';
import { useBooks } from '../context/books';
import BookShow from './BookShow';

const BookList: React.FC = () => {
  const { books } = useBooks();

  const renderedBooks = books.map((book) => (
      <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
