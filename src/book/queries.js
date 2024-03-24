const getBooks = `
  SELECT b.*, g.name 
  FROM books AS b 
  CROSS JOIN book_genres AS bg 
  CROSS JOIN genres AS g 
  WHERE b.bid = bg.book_id 
  AND bg.genre_id = g.gid
`;

const getBookById = 'SELECT * FROM books as b WHERE b.bid = $1';

const getBookByISBN = 'SELECT * FROM books as b WHERE b.isbn = $1';

module.exports = {
  getBooks,
  getBookById,
  getBookByISBN,
};