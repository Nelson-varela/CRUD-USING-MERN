const categoriaCtrl = {};

const Categoria = require('../models/categoria');

categoriaCtrl.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

categoriaCtrl.createCategoria = async (req, res) => {
    try {
        const { nombre_categoria } = req.body;

        const newCategoria = new Categoria({ nombre_categoria });
        await newCategoria.save();
        res.json('Nueva categoria creada');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

categoriaCtrl.deleteCategoria = async (req, res) => {
    const { id } = req.params;
    await Categoria.findByIdAndDelete(id);
    res.json('Categoria borrada');
}

module.exports = categoriaCtrl;