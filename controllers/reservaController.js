const Reserva = require('../models/reserva');

module.exports = class ReservaController {

    static async inserir(req, res) {
        console.log(req.body);

        const reserva = new Reserva({
            placaCarro: req.body.placaCarro,
            cpfCliente: req.body.cpfCliente,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim
        });

        reserva.save(reserva).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao tentar inserir os dados da reserva: ${reserva}` })
        })
    }
}