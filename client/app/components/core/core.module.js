(function() {
  'use strict';

  angular.module('app.core',[
    /*
     * Angular modules maybe remove storage and jwt?
     */
    'ui.router', 'angular-storage', 'angular-jwt',
    /*
     * Reusable cross-app modules
     */


     /*
      * 3rd party modules
      */
      'ngDialog'
    ]);
})();