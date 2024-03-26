# Library Management System API

This project implements a RESTful API for managing a library system. It allows performing CRUD operations (Create, Read, Update, Delete) on books stored in the library database.

## Features

- Create new books
- Retrieve information about books
- Update existing book details
- Delete books from the system

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- SQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/richnguyenn/Library-Management-System.git
   ```
2. Navigate to the project directory:

  ```bash
  cd Library-Management-System
  ```
3. Navigate to the project directory:

  ```bash
  npm install
  ```
4. Set up your PostgreSQL database and update the connection details in the project.

5. Start the server
  ```bash
  npm start
  ```

## Usage

The Library Management System API provides the following endpoints:

1. **Retrieve All Books**: Use the `GET /api/v1/library` endpoint to retrieve a list of all books stored in the library.

2. **Retrieve a Specific Book**: Use the `GET /api/v1/library/:pathSeg1/:pathSeg2` endpoint to retrieve information about a specific book. You can provide either the book's ID or ISBN as the `pathSeg1`, and the corresponding value as `pathSeg2` in the URL.

3. **Add a New Book**: Use the `POST /api/v1/library` endpoint to add a new book to the library. Provide the necessary details such as title, author, ISBN, publication year, description, and quantity available in the request body.

4. **Delete a Book**: Use the `DELETE /api/v1/library/:pathSeg1/:pathSeg2` endpoint to delete a book from the library. You can specify either the book's ID or ISBN as the `pathSeg1`, and the corresponding value as `pathSeg2` in the URL.

5. **Update Book Details**: Use the `PUT /api/v1/library/:pathSeg1/:pathSeg2` endpoint to update details of a book in the library. You can provide either the book's ID or ISBN as the `pathSeg1`, and the corresponding value as `pathSeg2` in the URL. Provide the attributes you want to update in the request body.

Ensure that proper authentication and authorization mechanisms are implemented based on your requirements to secure the API endpoints and control access to sensitive operations.

# API Endpoints

This document outlines the API endpoints for the Library Management System.

- **GET /api/v1/library**: Retrieve all books.
- **GET /api/v1/library/:pathSeg1/:pathSeg2**: Retrieve a book by its ID or ISBN.
- **POST /api/v1/library**: Add a new book.
- **DELETE /api/v1/library/:pathSeg1/:pathSeg2**: Delete a book by its ID or ISBN.
- **PUT /api/v1/library/:pathSeg1/:pathSeg2**: Update a book's details.

These endpoints allow you to perform various CRUD (Create, Read, Update, Delete) operations on the books in the library system.

