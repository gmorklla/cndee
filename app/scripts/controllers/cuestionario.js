'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:CuestionarioCtrl
 * @description
 * # CuestionarioCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('CuestionarioCtrl', ['loadData', 'testTitle', 'prettyUrl', '_', '$stateParams', '$scope', '$state', function(loadData, testTitle, prettyUrl, _, $stateParams, $scope, $state) {
        $scope.view = $stateParams.testId;
        if (testTitle.getTitle()) {
            $scope.titulo = testTitle.getTitle();
        } else {
            $scope.titulo = prettyUrl.deconfig($stateParams.testId);
        }

        var datos = loadData.httpReq('data/test-' + $scope.view + '.json');
        datos.then(function(datos) {
            $scope.preguntas = datos.data;
            setDatos();
        }, function(e) {
            console.log(e);
        });

        $scope.formData = {};

        $scope.envia = function() {
            var fieldValuePairs = $('#form1').serializeArray();
            $.each(fieldValuePairs, function(index, fieldValuePair) {
                $scope.formData[fieldValuePair.name] = fieldValuePair.value;
            });
            digiere();
            $state.go('test.cuestionario.resultado', {forma: $scope.formData});
        };

        function setDatos() {
            // console.log('Título: ' + $scope.titulo);
            switch ($scope.titulo) {
                case 'ansiedad':
                case 'Ansiedad':
                    $scope.subj = 'Trastorno de Ansiedad';
                    $scope.numPregs = 16;
                break;
                case 'Personalidad histriónica':
                case 'personalidad histrionica':
                    $scope.subj = 'Trastorno de Personalidad Histrionico';
                    $scope.numPregs = 11;
                break;
                case 'Personalidad narcisista':
                case 'personalidad narcisista':
                    $scope.subj = 'Trastorno de Personalidad Narcisista';
                    $scope.numPregs = 10;
                break;
                case 'Personalidad Antisocial':
                case 'personalidad antisocial':
                    $scope.subj = 'Trastorno de Personalidad Anti-Social';
                    $scope.numPregs = 10;
                break;
                case 'Depresión':
                case 'depresion':
                    $scope.subj = 'Depresion';
                    $scope.numPregs = 20;
                break;
                case 'Bipolaridad':
                case 'bipolaridad':
                    $scope.subj = 'Trastorno Bipolar';
                    $scope.numPregs = 10;
                break;
                case 'Disfunción Eréctil':
                case 'disfuncion erectil':
                    $scope.subj = 'Trastorno de Ereccion';
                    $scope.numPregs = 11;
                break;
                case 'Anorgasmia':
                case 'anorgasmia':
                    $scope.subj = 'Anorgasmia';
                    $scope.numPregs = 10;
                break;
                case 'Dispareunia':
                case 'dispareunia':
                    $scope.subj = 'Trastornos de Dispareunia';
                    $scope.numPregs = 12;
                break;
                case 'Trastorno del deseo sexual':
                case 'trastorno del deseo sexual':
                    $scope.subj = 'Trastorno del Deseo Sexual';
                    $scope.numPregs = 12;
                break;
                case 'Drogadicción':
                case 'drogadiccion':
                    $scope.subj = 'Consumo de Sustancias';
                    $scope.numPregs = 12;
                break;
                case 'Alcoholismo':
                case 'alcoholismo':
                    $scope.subj = 'Alcoholismo';
                    $scope.numPregs = 12;
                break;
                case 'Trastorno esquizofrénico':
                    $scope.subj = 'Esquizofrenia';
                break;
                case 'Ejerzo violencia con mis seres queridos':
                case 'violencia con seres queridos':
                    $scope.subj = 'Ejerzo violencia con mis seres queridos';
                    $scope.numPregs = 13;
                break;
                case '¿Sufro violencia de pareja?':
                case 'violencia de pareja':
                    $scope.subj = 'Violencia de Pareja';
                    $scope.numPregs = 11;
                break;
                case 'Codependencia':
                case 'codependencia':
                    $scope.subj = 'Codependencia';
                    $scope.numPregs = 14;
                break;
                case '¿Establezco una relación sana de pareja?':
                case 'relacion sana de pareja':
                    $scope.subj = 'Establezco una relacion sana con mi pareja';
                    $scope.numPregs = 18;
                break;
                case 'Relaciones familiares':
                case 'relaciones familiares':
                    $scope.subj = 'Problemas relacionados con la familia';
                    $scope.numPregs = 18;
                break;
                case '¿Cómo es la relación con mi hijo adolescente?':
                case 'relacion con mi hijo adolescente':
                    $scope.subj = 'Como es la relacion con mi hijo adolescente';
                    $scope.numPregs = 10;
                break;
                case 'Vejez':
                case 'vejez':
                    $scope.subj = 'Vejez';
                    $scope.numPregs = 10;
                break;
                case '¿Mi hijo necesita apoyo psicológico?':
                    $scope.subj = 'Cómo saber si mi hijo necesita apoyo psicologico';
                break;
                case 'Anorexia':
                case 'anorexia':
                    $scope.subj = 'Anorexia';
                    $scope.numPregs = 10;
                break;
                case 'Bulimia':
                case 'bulimia':
                    $scope.subj = 'Bulimia';
                    $scope.numPregs = 7;
                break;
                case 'Celos en la pareja':
                case 'celos en la pareja':
                    $scope.subj = 'Celos en la pareja';
                    $scope.numPregs = 24;
                break;
                case 'Ataques de pánico':
                case 'ataques de panico':
                    $scope.subj = 'Ataques de pánico';
                    $scope.numPregs = 21;
                break;
                case 'Estrés postraumático':
                case 'estres postraumatico':
                    $scope.subj = 'Estrés postraumático';
                    $scope.numPregs = 17;
                break;
                case 'Ansiedad por separación en niños':
                case 'ansiedad por separacion en ninos':
                    $scope.subj = 'Ansiedad por separación en niños';
                    $scope.numPregs = 16;
                break;
                case 'Eyaculación precoz':
                case 'eyaculacion precoz':
                    $scope.subj = 'Trastorno de eyaculacion precoz';
                    $scope.numPregs = 11;
                break;
                case '¿Cómo enfrento la muerte de un ser querido?':
                case 'duelo':
                    $scope.subj = 'Duelo';
                    $scope.numPregs = 10;
                break;
                case 'Estrés':
                case 'estres':
                    $scope.subj = 'Estres';
                    $scope.numPregs = 13;
                break;
                case 'Vaginismo':
                case 'vaginismo':
                    $scope.subj = 'Vaginismo';
                    $scope.numPregs = 10;
                break;
                case '¿Tengo problemas con mi autoestima?':
                case 'tengo problemas con mi autoestima':
                    $scope.subj = 'Problemas con autoestima';
                    $scope.numPregs = 10;
                break;
                case '¿Por qué es importante aceptar nuestro destino?':
                case 'por que es importante aceptar nuestro destino':
                    $scope.subj = 'Por qué es importante aceptar nuestro destino';
                    $scope.numPregs = 6;
                break;
                case '¿Soy una persona mentalmente sana?':
                case 'soy una persona mentalmente sana':
                    $scope.subj = 'Soy una persona mentalmente sana';
                    $scope.numPregs = 22;
                break;                   
            }
        }

        // Procesa datos que angular todavía no ha digerido
        function digiere() {
            if (!$scope.$$phase) {
                $scope.$digest();
            }
        }        

    }]);
