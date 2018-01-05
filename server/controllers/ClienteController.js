const mongoose = require('mongoose');
const multer   = require("multer");


module.exports = function (app) {

    var controller = {};

    var model = mongoose.model('Cliente');

    controller.lista = function (req, res) {
        model.find()
            .then(function (clientes) {
                res.json(clientes);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.insere = function (req, res) {
        model.create(req.body)
            .then(function (cliente) {
                res.status(201).json(cliente);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.buscaId = function (req, res) {
        model.findById(req.params.id)
            .then(function (cliente) {
                res.status(200).json(cliente);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    controller.delete = function (req, res) {

        var id = req.params.id;

        model.delete({ _id: id })
            .then(function (cliente) {
                res.sendStatus(202);
            }, function (error) {
                console.log(error);
                res.sendStatus(404);
            });
    };

    controller.altera = function (req, res) {

        model.findByIdAndUpdate(req.params.id, req.body)
            .then(function (cliente) {
                res.status(200).json(cliente);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    return controller;
};