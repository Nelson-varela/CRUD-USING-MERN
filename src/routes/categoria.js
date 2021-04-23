  
const { Router } = require('express');
const router = Router();

const { getCategorias,createCategoria, deleteCategoria } = require('../controllers/categorias.controllers');

router.route('/')
    .get(getCategorias)
    .post(createCategoria);

router.route('/:id')
    .delete(deleteCategoria);

module.exports = router;