const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    dtNascimento: {
        type: Date,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    numCNH: {
        type: Number,
        require: true
    },
    anoVencCNH: {
        type: Number,
        require: true
    },
    fotoMotorista: {
        data: Buffer,
        contentType: String,
        require: false
    }

}, { versionKey: false });

module.exports = mongoose.model('Cliente', Cliente);