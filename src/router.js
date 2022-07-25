const bookcontroller = require('./controller/bookController');
const router = require('express').Router();

router.get('/book', bookcontroller.getBook);
router.get('/book/:id', bookcontroller.getBooksById);
router.post('/book', bookcontroller.addBook);
router.put('/book:id', bookcontroller.updateBook);
router.delete('/book:id', bookcontroller.deleteBook);

module.exports = router;