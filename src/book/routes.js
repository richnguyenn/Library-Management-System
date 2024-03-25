const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getBooks);
router.get('/isbn/:isbn', controller.getBookByISBN);
router.get('/id/:bid', controller.getBookById);
router.post('/', controller.addBook);

module.exports = router;