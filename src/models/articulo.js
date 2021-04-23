onst { Schema, model } = require('mongoose');

const articuloSchema = new Schema(
    {
        numero_registro: {Number, min: 3, max: 20, required: true} ,
        nombre: { type: String, required: true, trim: true},
        descripcion: { type: String, required: true, trim: true},
        categoria: { type: String },
    }, {
        timestamps: true
    });

module.exports = model('Articulo', articuloSchema);