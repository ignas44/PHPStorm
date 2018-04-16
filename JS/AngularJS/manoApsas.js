let app = angular.module('manoApsas', []);

app.controller('menuController', function () {
    let vm = this;
    vm.meniu = [
        {url: '/index.html', pavadinimas: 'Pradzia'},
        {url: '/Katalogas.html', pavadinimas: 'Katalogas'},
        {url: '/Kontaktai.html', pavadinimas: 'Kontaktai'},

    ]
    ;
});
