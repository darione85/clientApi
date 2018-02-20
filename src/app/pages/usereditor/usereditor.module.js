(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usereditor',[])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usereditor', {
                url: '/usereditor',
                title: 'usereditor',
                templateUrl: 'app/pages/usereditor/userpage.html',
                controller: 'JsonEditorCtrl',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            })
            .state('usereditor.profile', {
                url: '/profile',
                title: 'usereditor',
                templateUrl: 'app/pages/usereditor/userinput.html',
                controller: 'UserInputController',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 100,
                },
        })
            .state('usereditor.configuration', {
                url: '/configuration',
                title: 'User Configuration',
                templateUrl: 'app/pages/usereditor/jsoneditor.html',
                controller: 'UserConfigurationController',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 200,
                },
            });
    }

})();

