const { Schema, model } = require('mongoose');

const articuloSchema = new Schema(
    {
        numero_registro: {type: String, required: true, unique: true} ,
        nombre: { type: String, required: true, trim: true},
        descripcion: { type: String, required: true, trim: true},
        categoria: { type: String },
    }, {
        timestamps: true
    });

module.exports = model('Articulo', articuloSchema);