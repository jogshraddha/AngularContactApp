/**
 * Created by shraddha on 8/12/14.
 */
'use strict';

angular.module('contactApp').controller('MainController', function ($scope, contactService) {
  $scope.contacts = contactService.getContacts();
});