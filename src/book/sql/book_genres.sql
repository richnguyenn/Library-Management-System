CREATE TABLE book_genres (
    book_id INTEGER REFERENCES books(bid),
    genre_id INTEGER REFERENCES genres(gid),
    PRIMARY KEY (book_id, genre_id)
);