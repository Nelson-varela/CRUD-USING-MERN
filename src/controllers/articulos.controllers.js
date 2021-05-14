const articuloCtrl = {};

const Articulo = require('../models/articulo');

articuloCtrl.getArticulos = async (req, res) => {
    const articulos = await Articulo.find();
    res.json(articulos);
};

articuloCtrl.createArticulo = async (req, res) => {
    const { numero_registro, nombre, descripcion, categoria, imgUrl } = req.body;
    const newArticulo = new Articulo({
        numero_registro,
        nombre,
        descripcion,
        categoria,
        imgUrl
    });
    await newArticulo.save();
    res.json('Nuevo articulo agregado');
};

articuloCtrl.getArticulo = async (req, res) => {
    const articulo = await Articulo.findById(req.params.id);
    res.json(articulo);
}

articuloCtrl.deleteArticulo = async (req, res) => {
    await Articulo.findByIdAndDelete(req.params.id)
    res.json('Articulo borrado');
}

articuloCtrl.updateArticulo = async (req, res) => {
    const { numero_registro, nombre, descripcion, categoria, imgUrl } = req.body;
    await Articulo.findByIdAndUpdate(req.params.id, {
        numero_registro,
        nombre,
        descripcion,
        categoria, 
        imgUrl
    });
    res.json('Articulo actualizado');
}

module.exports = articuloCtrl;