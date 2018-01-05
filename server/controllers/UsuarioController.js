

module.exports = function (app) {
    const mongoose = require('mongoose');
    const md5 = require('md5');
    var controller = {};

    var model = mongoose.model('Usuario');

    controller.lista = function (req, res) {
        model.find()
            .then(function (usuarios) {
                res.json(usuarios);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.insere = function (req, res) {
        console.log('cadastro de usuario');
        model.create({
            login: req.body.login,
            senha: md5(req.body.senha),
            nome: req.body.nome,
            profissao: req.body.profissao,
            foto: req.body.foto
        }).then(function (usuario) {
            res.status(201).json(usuario);
        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
    };

    controller.buscaId = function (req, res) {
        model.findById(req.params.id)
            .then(function (usuario) {
                res.status(200).json(usuario);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.delete = function (req, res) {

        var id = req.params.id;

        model.delete({ _id: id })
            .then(function (usuario) {
                res.sendStatus(202);
            }, function (error) {
                console.log(error);
                res.sendStatus(404);
            });
    };

    controller.altera = function (req, res) {

        model.findByIdAndUpdate(req.params.id, req.body)
            .then(function (usuario) {
                res.status(200).json(usuario);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    return controller;
};