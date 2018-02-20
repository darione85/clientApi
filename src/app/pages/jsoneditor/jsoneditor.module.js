/**
 * @author dario
 * created on 12.02.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.jsoneditor', ['ng.jsoneditor'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('jsoneditor', {
                url: '/jsoneditor',
                title: 'jsonEditor',
                templateUrl: 'app/pages/jsoneditor/editor/jsoneditor.html',
                controller: 'JsonEditorCtrl',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();

