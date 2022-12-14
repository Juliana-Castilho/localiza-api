const mongoose = require('mongoose');

const Funcionario = new mongoose.Schema({

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
    dtContratacao: {
        type: Date,
        require: true
    },
    salario: {
        type: Number,
        require: true
    },
    qtAlugueis: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }


}, { versionKey: false });

module.exports = mongoose.model('Funcionario', Funcionario);