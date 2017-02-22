'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.RTData
 * @description: request get genérico
 * # RTData
 * Factory in the cndeeApp.
 */
angular.module('cndeeApp')
    .factory('FirebaseRTData', [function() {

        return {
            checkLogInUser: function(fn) {
                return firebase.auth().onAuthStateChanged(fn);
            },
            logOut: function () {
            	return firebase.auth().signOut();
            },
            logIn: function (email, password) {
            	return firebase.auth().signInWithEmailAndPassword(email, password);
            },
            createUser: function (email, password) {
            	return firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            deleteUser: function (user) {
                return user.delete();
            },
            ref: function (path) {
            	return firebase.database().ref(path);
            }
        };

    }]);
