const mongoose = require('mongoose');

const Carro = mongoose.Schema({
    placa: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    quilometragem: {
        type: Number,
        require: true
    },
    diaria: {
        type: Number,
        require: true
    },
    observacao: {
        type: String,
        require: false
    }
}, { versionKey: false });

module.exports = mongoose.model('Carro', Carro);