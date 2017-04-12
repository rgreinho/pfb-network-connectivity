(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name pfb.components.User:User
     *
     * @description
     * Resource for user
     */
    /* @ngInject */
    function User($resource) {

        return $resource('/api/users/:uuid/', {
            uuid: '@uuid'
        }, {
            'update': {
                method: 'PUT'
            },
            'query': {
                method: 'GET',
                isArray: false
            }
        });
    }

    /**
     * @ngdoc service
     * @name pfb.components.UserRoles:UserRoles
     *
     * @description
     * Resource for user roles
     */
    function UserRoles() {
        var roles = ['Viewer', 'Administrator', 'Editor', 'Uploader'];
        var roleFilters = {
            'Viewer': 'VIEWER',
            'Administrator': 'ADMIN',
            'Editor': 'EDITOR',
            'Uploader': 'UPLOADER'
        };
        var module = {
            roles: roles,
            roleFilters: roleFilters
        };
        return module;
    }

    angular.module('pfb.components')
        .factory('User', User)
        .factory('UserRoles', UserRoles);
})();
