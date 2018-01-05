module.exports = function($routeProvider, $locationProvider, $httpProvider, $mdThemingProvider){
    
    $httpProvider.interceptors.push("tokenInterceptor");
    $locationProvider.html5Mode(true);

    var neonBlueMap = $mdThemingProvider.extendPalette('blue', {
        '900': '#5e9edc',
        'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('neonBlue', neonBlueMap); 

    var warnMap = $mdThemingProvider.extendPalette('red', {
        '500': '#f1634b',
        'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('warnMap', warnMap);

    $mdThemingProvider
        .theme('default')
        .primaryPalette('neonBlue')
        .warnPalette('warnMap');

    

    $routeProvider.when("/login", {
        templateUrl: '../partials/login.html',
        controller: 'loginController'
    });

    $routeProvider.when("/cadastro", {
        templateUrl: '../partials/cadastro-usuario.html',
        controller: 'loginController'
    });

    $routeProvider.when("/dashboard", {
        templateUrl: '../partials/panel.html',
        controller: 'PanelController'
    });

    $routeProvider.when("/", {
        templateUrl: '../partials/feed.html',
        controller: 'FeedController'
    });

    $routeProvider.otherwise({redirectTo: '/login'});
};