import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Book {
  id: number;
  title: string;
}

interface BooksContextType {
  books: Book[];
  deleteBookById: (id: number) => void;
  editBookById: (id: number, newTitle: string) => void;
  createBook: (title: string) => void;
  setBooks: (books: Book[]) => void;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const defaultBooks: Book[] = [
      { id: 1, title: '1984' },
      { id: 2, title: 'To Kill a Mockingbird' },
      { id: 3, title: 'The Great Gatsby' },
    ];
    setBooks(defaultBooks);
  }, []);


  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = (title: string) => {
    const newBook = { id: books.length + 1, title };
    setBooks([...books, newBook]);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    setBooks
  };

  return (
      <BooksContext.Provider value={valueToShare}>
        {children}
      </BooksContext.Provider>
  );
};

// Custom hook for using the books context
const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
};

export { Provider, useBooks };
