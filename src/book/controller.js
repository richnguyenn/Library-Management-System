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
}

module.exports = {
  getBooks,
  getBookById,
  getBookByISBN,
};