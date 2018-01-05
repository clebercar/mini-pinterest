const mongoose = require('mongoose');

module.exports = function (app) {

    var controller = {};


    var model = mongoose.model('Produto');

    controller.lista = function (req, res) {

        model.find({
            usuario: mongoose.Types.ObjectId(req.headers['usuario-logado'])
        }).then(function (produtos) {
            res.json(produtos);
        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });

    };

    controller.listaAll = function (req, resp) {
        model.find()
            .then(function (produtos) {
                console.log(produtos);
                resp.json(produtos);
            }, function (error) {
                console.log(error);
                resp.sendStatus(500);
            });
    }

    controller.insere = function (req, res) {
        model.create({
            nome: req.body.nome,
            categoria: req.body.categoria,
            link: req.body.link,
            foto: req.body.foto,
            descricao: req.body.descricao,
            cliente: req.body.cliente,
            usuario: mongoose.Types.ObjectId(req.body.usuario)
        })
            .then(function (produto) {
                res.status(201).json(produto);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.buscaId = function (req, res) {
        model.findById(req.params.id)
            .then(function (produto) {
                res.status(200).json(produto);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.delete = function (req, res) {

        var id = req.params.id;

        model.remove({ _id: id })
            .then(function (produto) {
                res.sendStatus(202);
            }, function (error) {
                console.log(error);
                res.sendStatus(404);
            });
    };

    controller.altera = function (req, res) {

        model.findByIdAndUpdate(req.params.id, req.body)
            .then(function (produto) {
                console.log("produto alterado " + produto);
                res.status(200).json(produto);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    return controller;
};