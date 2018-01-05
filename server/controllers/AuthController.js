module.exports = function (app) {

    const mongoose = require('mongoose');
    const md5 = require('md5');
    const jwt = require('jsonwebtoken');

    var model = mongoose.model("Usuario");

    var controller = {};

    controller.auth = function (req, res, next) {

        model.findOne({
            login: req.body.login,
            senha: md5(req.body.senha)
        }).then(function (usuario) {
            if (!usuario) {
                console.log('Login/senha inválidos');
                res.sendStatus(401);
            } else {
                
                var token = jwt.sign({ login: usuario.login }, app.get('secret'), {
                    expiresIn: 86400
                });
                console.log('Autenticado: token adicionado na resposta');
                
                res.set('x-access-token', token); // adicionando token no cabeçalho de resposta
                
                res.json({
                    id : usuario.id,
                    nome : usuario.nome, 
                    foto: usuario.foto,
                    produto: usuario.produtos,
                    profissao: usuario.profissao
                }).end(); // enviando a resposta
                
            }
        });
    }

    controller.verificaToken = function (req, res, next) {
        var token = req.headers['x-access-token'];
        console.log(req.body);
        if (token) {
            console.log("Token recebido. Decodificando ...");
            jwt.verify(token, app.get('secret'), function (error, decoded) {
                if (error) {
                    console.log('token rejeitado');
                    res.sendStatus(401)
                } else {
                    console.log('Token aceito');
                    req.usuario = decoded;
                    next();
                }
            });
        }else{
            console.log("Nenhum token foi enviado");
            return res.sendStatus(401);
        }
    }

    return controller;
}