const pool = require('../../db');
const queries = require('./queries')

const getBooks = (req, res) => {
  pool.query(queries.getBooks, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getBookById = (req, res) => {
  const bid = parseInt(req.params.bid);
  pool.query(queries.getBookById, [bid], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  pool.query(queries.getBookByISBN, [isbn], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addBook = (req, res) => {
  const { title, author, isbn, publication_year, description, quantity_available } = req.body;

  pool.query(queries.checkISBNExists, [isbn], (error, results) => {
    if (error) {
      console.error('Error checking ISBN:', error);
      return res.status(500).send('Internal server error');
    }

    if (results.rows.length > 0) {
      return res.status(400).send('Book already exists. Not a unique ISBN.');
    }

    pool.query(queries.addBook, [title, author, isbn, publication_year, description, quantity_available], (error, results) => {
      if (error) {
        console.error('Error adding book:', error);
        return res.status(500).send('Error adding book to database');
      }
      res.status(201).send("Book Instance Created Successfully!");
    });
  });
};

module.exports = {
  getBooks,
  getBookById,
  getBookByISBN,
  addBook,
};