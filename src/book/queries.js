const getBooks = `
  SELECT b.*, g.name 
  FROM books AS b 
  CROSS JOIN book_genres AS bg 
  CROSS JOIN genres AS g 
  WHERE b.bid = bg.book_id 
  AND bg.genre_id = g.gid
`;

module.exports = {
  getBooks,
};