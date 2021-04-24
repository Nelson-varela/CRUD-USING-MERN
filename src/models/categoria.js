const { Schema, model } = require('mongoose');

const categoriaSchema = new Schema(
    {
        nombre_categoria: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('Categoria', categoriaSchema);