const pool = require('../../db');
const queries = require('./queries')

const getBooks = (req, res) => {
  pool.query(queries.getBooks, (error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).send('Internal server error');
    }
    res.status(200).json(results.rows);
  });
};

const getBook = (req, res) => {
  const pathSeg1 = req.params.pathSeg1;
  const pathSeg2 = req.params.pathSeg2;

  let pathQuery = '';

  if (pathSeg1 === 'id') {
    pathQuery = queries.getBookById;
  } else if (pathSeg1 === 'isbn') {
    pathQuery = queries.getBookByISBN;
  } else {
    return res.status(400).send('The link you are looking for does not exist');
  }
  
  pool.query(pathQuery, [pathSeg2], (error, results) => {
    if (error) {
      console.error('Error fetching book:', error);
      return res.status(500).send('Internal Server error');
    }
    if (results.rows.length === 0) {
      return res.status(404).send('Book could not be found');
    }
    res.status(200).json(results.rows[0]);
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

const deleteBook = (req, res) => {
  const pathSeg1 = req.params.pathSeg1;
  const pathSeg2 = req.params.pathSeg2;

  let pathQuery = '';

  if (pathSeg1 === 'id') {
    pathQuery = queries.deleteBookById;
  } else if (pathSeg1 === 'isbn') {
    pathQuery = queries.deleteBookByISBN;
  } else {
    return res.status(400).send('The link you are looking for does not exist');
  }

  pool.query(pathQuery, [pathSeg2], (error, results) => {
    if (error) {
      console.error('Error deleting book:', error);
      return res.status(500).send('Internal server error');
    }
    if (!results.rowCount === 0) {
      return res.status(404).send('Book not found');
    }
    res.status(200).send('Book deleted successfully');
  });
};

module.exports = {
  getBooks,
  addBook,
  getBook,
  deleteBook,
};