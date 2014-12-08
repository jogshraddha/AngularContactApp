/**
 * Created by shraddha on 8/12/14.
 */

'use strict';

angular.module('contactApp').factory('contactService', function(){
  var contacts = [{'name': 'John Smith' , number : '8987653421'},
    {'name': 'Dave Conner' , number : '7678789335'},
    {'name': 'Dale Finch' , number : '4567382243'}];

  return {
    getContacts: function() {
      return contacts;
    },

    addContact: function(newContact) {
      contacts.push(newContact);
      console.log('New contact added');
    }
  };
});