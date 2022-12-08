const express = require('express')
const database = require('./configs/database')

// Conexão com o banco de dados
database.mongoose.set('strictQuery', true)
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conexão estabelecida com o bando de dados');
    }).catch(error => {
        console.log('Não conseguiu conectar com o banco de dados', error);
        process.exit();
    });

// Criando uma aplicação express
const app = express();

// Definindo envio e recepção da requisição em json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`);
})