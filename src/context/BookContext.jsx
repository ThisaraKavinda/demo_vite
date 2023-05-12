import React, { useState, useContext } from "react";

const BooksContext = React.createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

const useBooks = () => {
  const { books } = useContext(BooksContext);
  return books;
};

const useSetBooks = () => {
  const { setBooks } = useContext(BooksContext);
  return setBooks;
};

export { BooksProvider, useBooks, useSetBooks };