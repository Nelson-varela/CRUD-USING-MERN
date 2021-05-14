const { Router } = require('express');
const router = Router();

const auth = require('../controllers/auth')

const { 
    getArticulos, 
    createArticulo, 
    getArticulo, 
    deleteArticulo, 
    updateArticulo } = require('../controllers/articulos.controllers');

router.route('/')
    .get(getArticulos)
    .post(createArticulo);

router.route('/:id')
    .get(getArticulo)
    .delete(deleteArticulo)
    .put(updateArticulo);

module.exports = router;