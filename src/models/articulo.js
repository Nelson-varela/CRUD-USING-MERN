const { Schema, model } = require('mongoose');

const articuloSchema = new Schema(
    {
        numero_registro: {type: String, required: true, unique: true} ,
        nombre: { type: String, required: true, trim: true},
        descripcion: { type: String, required: true, trim: true},
        categoria: { type: String },
        imgUrl: { type: String, required: true}
    }, {
        timestamps: true
    });

module.exports = model('Articulo', articuloSchema);