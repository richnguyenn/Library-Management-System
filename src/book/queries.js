const getBooks = 'SELECT * FROM books b';

const getBookById = 'SELECT * FROM books b WHERE b.bid = $1';

const getBookByISBN = 'SELECT * FROM books b WHERE b.isbn = $1';

const checkISBNExists = 'SELECT b FROM books b WHERE b.isbn = $1';

const addBook = 'INSERT INTO books (title, author, isbn, publication_year, description, quantity_available) VALUES ($1, $2, $3, $4, $5, $6)';

module.exports = {
  getBooks,
  getBookById,
  getBookByISBN,
  checkISBNExists,
  addBook,
};