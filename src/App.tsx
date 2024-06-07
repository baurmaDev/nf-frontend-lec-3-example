import React, {useContext, useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {Book, BooksContext} from "./context/books";

const defaultBooks: Book[] = [
    { id: 1, title: '1984' },
    { id: 2, title: 'To Kill a Mockingbird' },
    { id: 3, title: 'The Great Gatsby' },
];

const App: React.FC = () => {
    const context = useContext(BooksContext);

    useEffect(() => {
        if (context) {
            context.setBooks(defaultBooks);
        }
    }, []);
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
};

export default App;
