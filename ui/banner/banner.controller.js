(function () {
    'use strict';

    angular
        .module('app')
        .controller('BannerController', BannerController);

    BannerController.$inject = ['$location'];
    function BannerController($location) {
        var vm = this;

        vm.banner = banner;

        function banner() {
            vm.dataLoading = true;
        };
    }

})();
