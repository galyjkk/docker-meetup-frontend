'use strict';

angular.module('dockerMeetupFrontendApp')
  .service('HomeBaseService', function Coursemodify($http, $rootScope, $location) {
    var me = this;

    this.temporaryLibrary = {
      id: '',
      name: '',
      isOfficial: false,
      isSubmit: false,
      isCreate: false,
      isBuild: false,
      isDeploy: false
    };

    this.resetTemporaryLibrary = function() {
      this.temporaryLibrary = {
        id: '',
        name: '',
        isOfficial: false,
        isSubmit: false,
        isCreate: false,
        isBuild: false,
        isDeploy: false
      };
    };

    this.libraries = [];

    /*
     * Broadcast
     */
    this.broadcastAddedLibraries = function() {
      $rootScope.$broadcast('broadcastAddedLibraries', me.libraries);
    };

    return {

      /*
       * Add library to libraries.
       */
      addLibrary: function(item) {
        me.temporaryLibrary.name = item.name;
        me.temporaryLibrary.isOfficial = item.is_official;
        me.libraries.splice(me.libraries.length, 0, me.temporaryLibrary);
        console.log(me.libraries);
        me.broadcastAddedLibraries();
        me.resetTemporaryLibrary();
      },

      /*
       * remove library from libraries.
       */
      removeLibrary: function(item) {
        for (var i = 0; i < me.libraries.length; i++) {
          if (item.name === me.libraries[i].name) {
            me.libraries.splice(i, 1);
            break;
          };
        };
        // console.log(me.libraries);
        me.broadcastAddedLibraries();
      },

    };
  });
