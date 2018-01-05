module.exports = function ($mdToast) {

    var service = {};

    service.openToast = function ($event, classe, text) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .toastClass(classe)
            .hideDelay(3000)
            .position('top right')
        );
    };

    return service;
}