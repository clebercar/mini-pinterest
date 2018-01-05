require("jquery");
require("angular");
require('angular-resource');
require("angular-route");
require("angular-animate");
require("angular-aria");
require("angular-messages")
require("angular-material");
require("angular-utils-pagination");


/* ---- REQUIRE CONTROLLERS ----*/
var loginController = require("./controllers/LoginController");
var panelController = require("./controllers/PanelController");
var produtoController = require("./controllers/ProdutoController")
var feedController = require('./controllers/FeedController');

/* ---- REQUIRE DIRERIVAS ----*/
var navbar = require("./directives/navBar");
var thumb = require("./directives/thumbnail");
var modal = require("./directives/modal");
var imgPreview = require("./directives/img-preview");
var buttonAvatar = require("./directives/button-avatar");





/* ---- REQUIRE CONFIG ----*/
var config = require("./config/config");
var run = require("./config/run");



/* ---- REQUIRE SERVICES ----*/
var tokenInterceptor = require("./services/token-interceptor");
var modalService     = require("./services/modal-service");
var recursoProdutos  = require("./services/recurso-produtos");
var cadastroProdutos = require("./services/cadastro-produtos");
var toastService     = require("./services/toast-service");
var usuarioService   = require("./services/usuario-service");



/* ---- MODULE ----*/
var app = angular.module('app', ['ngRoute','ngResource','ngAnimate','ngMaterial','angularUtils.directives.dirPagination']);




/* ---- Blocos de configuração ----*/
app.config(['$routeProvider','$locationProvider','$httpProvider','$mdThemingProvider',config]);
app.run(['$rootScope', '$location','usuarioService',run]);



/* ---- FACTORYS ----*/
app.factory("tokenInterceptor",['$q','$window','$location','usuarioService',tokenInterceptor]);
app.factory("modalService",['$mdDialog',"recursoProdutos",'toastService','usuarioService',modalService]);
app.factory("recursoProdutos",['$resource',recursoProdutos]);
app.factory("cadastroProdutos",['$resource',cadastroProdutos]);
app.factory("toastService",['$mdToast',toastService]);
app.service("usuarioService",['$window','$location',usuarioService]);




/* ---- DIRERIVAS ----*/
app.directive("meuMenu",['usuarioService',navbar]);
app.directive("thumb",['$location',thumb]);
app.directive("modal",['modalService', modal]);
app.directive("imgPreview",[imgPreview]);
app.directive("buttonAvatar",['usuarioService',buttonAvatar]);




/* ---- CONTROLLERS ----*/
app.controller('loginController',['$scope','$http','$window','$location','$mdDialog','modalService','usuarioService','toastService', loginController]);
app.controller('PanelController',['$scope','$http','$routeParams','modalService',panelController]);
app.controller('ProdutoController',['$scope','$filter','toastService','modalService','recursoProdutos',produtoController]);
app.controller('FeedController',['$scope','$http',feedController])