'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('AdminCtrl', ['$scope', 'FirebaseRTData', '_', function($scope, FirebaseRTData, _) {

        $scope.usuario = '';

        $scope.tests = [];

        var refAllTests = FirebaseRTData.ref('test');

        // Log in Firebase
        $scope.iniciarSesion = function() {
            $scope.loadingOn = true;
            $scope.logeandose = true;
            // Login user
            var logeando = FirebaseRTData.logIn($scope.email.text, $scope.password);
            logeando.then(function(datos) {
                // console.log(datos);
                $scope.usuario = datos.email;               
                $scope.checkFirebaseAll();
                digiere();
                $scope.loadingOn = false;
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $scope.error = "Ups, parece que tus datos son incorrectos, por favor verifícalos.";
                digiere();
            });
        };

        // Log out Firebase
        $scope.cerrarSesion = function() {
            FirebaseRTData.logOut().then(function() {
                // Sign-out successful.
                $scope.usuario = '';
                digiere();
            }, function(error) {
                // An error happened.
                console.log(error);
            });
        }

        // Consulta base de tests
        $scope.checkFirebaseAll = function () {
            refAllTests.once("value").then(function(snapshot) {
                $scope.tests = [];
                snapshot.forEach(function(childSnapshot) {
                    // key will be "ada" the first time and "alan" the second time
                    var key = childSnapshot.key;
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    var obj = {
                        nombre: key,
                        num: _.size(childData)
                    }
                    $scope.tests.push(obj);
                    digiere();
                    //console.log(key, _.size(childData));
                });
            });
        }

        // Consulta base de test específico
        $scope.checkFirebaseTest = function() {
            $scope.loadingOn = true;
            $scope.tPendientes = [];
            $scope.tRevisados = [];
            var test = $scope.sTest.nombre;
            var ref = FirebaseRTData.ref('test/' + test);
            ref.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    // key will be "ada" the first time and "alan" the second time
                    var key = childSnapshot.key;
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    var obj = {
                        key: childSnapshot.key,
                        data: childSnapshot.val()
                    }
                    if(childData.checado == false) {
                        $scope.tPendientes.push(obj);
                    } else {
                        $scope.tRevisados.push(obj);
                    }
                });
                $scope.loadingOn = false;
                digiere();
            });            
        }

        $scope.updateOrNot = false;

        // Pone status como revisado en firebase
        $scope.updateStatePrev = function () {
            $scope.updateOrNot = true;
        }

        $scope.checkboxModel = {
            value1 : false
        };

        $scope.updateState = function (test, checkStatus) {
            if(test != null) {
                var testName = $scope.sTest.nombre;
                var ref = FirebaseRTData.ref('test/' + testName + '/' + test.key);
                ref.update({ checado: checkStatus }).then(function () {
                    $scope.updateOrNot = false;
                    $scope.checkFirebaseTest();
                    digiere();
                    $('.modal').modal('hide');
                });
            } else {
                $scope.updateOrNot = false;
            }
        }

        // Abre cuestionarios Pendientes
        $scope.cuestionariosPModal = function () {
            $scope.updateOrNot = false;
            $('#cuestionariosP').modal();
        }

        // Abre cuestionarios Revisados
        $scope.cuestionariosRModal = function () {
            $scope.updateOrNot = false;
            $('#cuestionariosR').modal();
        }

        // Checa si el usuario ha iniciado sesión 
        var usuarioLogInOrOut = FirebaseRTData.checkLogInUser(function(user) {
            if (user && $scope.logeandose != true) {
                // User is signed in.
                $scope.usuario = user.email;
                $scope.checkFirebaseAll();
                digiere();
            } else {
                // No user is signed in.
                console.log('No hay usuario logeado');
            }
        });

        $scope.newTest = [];
        var refNot = FirebaseRTData.ref('notificacion');
        refNot.on('child_changed', function(childSnapshot) {
            if($scope.usuario != '') {
                newTestData();
                $scope.checkFirebaseAll();
                sendingPushNot.test();
            }            
        });

        // Presenta datos del nuevo test
        function newTestData() {
            refNot.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childData = childSnapshot.val();
                    $scope.newTest.push(childData);
                    digiere();
                });
            });
        }

        // Send email
        $scope.sendMail = function(test) {
            var gender;
            if(test.data.sexo == 'Masculino') {
                gender = 'Estimado ';
            } else {
                gender = 'Estimada ';
            }
            var d = new Date(test.data.fecha);
            var options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            //console.log(test.data.mensaje.length);
            var mensajeEditado;
            var respuestaEditada;
            if(test.data.mensaje.length > 1000){
                mensajeEditado = test.data.mensaje.slice(0, 1000);
                mensajeEditado += ' (...)';
                respuestaEditada = '(...)';
            } else if(test.data.mensaje.length + test.data.respuesta.length > 1000){
                var maxLength = 1000 - test.data.mensaje.length;
                respuestaEditada = test.data.respuesta.slice(0, maxLength);
                respuestaEditada += ' (...)';
                mensajeEditado = test.data.mensaje;
            } else {
                mensajeEditado = test.data.mensaje;
                respuestaEditada = test.data.respuesta;
            }
            var fecha = d.toLocaleDateString("es-ES", options);
            var txtP = 'Datos de usuario' + '\n\nNombre: ' + test.data.nombre + '\nEdad: ' + test.data.edad + '\nSexo: ' + test.data.sexo + '\nEmail: ' + test.data.email + '\nMensaje: ' + mensajeEditado + '\nFecha del mensaje: ' + fecha + '\n\n' + gender + test.data.nombre + ':\n\n' + respuestaEditada + '\n\nPuedes comunicarte con nosotros a través de\nSimitel 01 800 911 6666 | Opción 3';
            // var link = "mailto:" + test.data.email + "?cc=" + $scope.usuario + "&subject=CNDEE | Test " + test.data.subject + "&body=" + encodeURIComponent(txtP);
            var link = "mailto:" + test.data.email + "?subject=CNDEE | Test " + test.data.subject + "&body=" + encodeURIComponent(txtP);
            window.location.href = link;
        }

        // Procesa datos que angular todavía no ha digerido
        function digiere() {
            if (!$scope.$$phase) {
                $scope.$digest();
            }
        }

    }]);
