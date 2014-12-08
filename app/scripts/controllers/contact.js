/**
 * Created by shraddha on 8/12/14.
 */
angular.module('contactApp').controller('ContactController', function ($scope, $location, contactService) {
  $scope.addContact = function(newContact) {
    contactService.addContact(newContact);
    $location.path('/');
  };
});