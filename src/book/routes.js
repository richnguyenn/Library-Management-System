const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getBooks);
router.get('/:pathSeg1/:pathSeg2', controller.getBook);
router.post('/', controller.addBook);
router.delete('/:pathSeg1/:pathSeg2', controller.deleteBook);

module.exports = router;