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

    this.temporaryId = 1;


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
        me.temporaryLibrary.id = me.temporaryId;
        me.temporaryLibrary.name = item.name;
        me.temporaryLibrary.isOfficial = item.is_official;
        // console.log(me.temporaryLibrary);
        me.libraries.splice(me.libraries.length, 0, me.temporaryLibrary);
        console.log(me.libraries);
        me.broadcastAddedLibraries();
        me.temporaryId = me.temporaryId + 1;
        me.resetTemporaryLibrary();
        // console.log(me.temporaryId);
      },

    };
  });
