'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:CuestionarioCtrl
 * @description
 * # CuestionarioCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('CuestionarioCtrl', ['loadData', 'testTitle', 'prettyUrl', '_', '$stateParams', '$scope', function(loadData, testTitle, prettyUrl, _, $stateParams, $scope) {
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

        $scope.envia = function() {
            if ($scope.titulo === 'Ataques de pánico' || $scope.titulo === 'Ansiedad por separación en niños' || $scope.titulo === 'Estrés postraumático') {
                $scope.eval = '';
                $.each($('select'), function(index, value) {
                    if ($(value).val() !== 'Masculino' && $(value).val() !== 'Femenino') {
                        $scope.eval += value.value;
                    }
                });
            } else {
                $scope.eval = 0;
                $.each($('select'), function(index, value) {
                    if ($(value).val() !== 'Masculino' && $(value).val() !== 'Femenino') {
                        $scope.eval += parseInt(value.value);
                    }
                });
            }
            setTimeout(function(){
            var fieldValuePairs = $('#form1').serializeArray();
            $.each(fieldValuePairs, function(index, fieldValuePair) {
                console.log("Item " + index + " is [" + fieldValuePair.name + "," + fieldValuePair.value + "]");
            });
/*                forma.action = "test/TEST/resultado.aspx";
                forma.submit();*/
            }, 500);
        };      

        function setDatos() {
            switch ($scope.titulo) {
                case 'Ansiedad':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 12;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno de Ansiedad';
                    break;
                case 'Personalidad histriónica':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 13;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno de Personalidad Histrionico';
                    break;
                case 'Personalidad narcisista':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 14;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno de Personalidad Narcisista';
                    break;
                case 'Personalidad Antisocial':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 15;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno de Personalidad Anti-Social';
                    break;
                case 'Depresión':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 16;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Depresion';
                    break;
                case 'Bipolaridad':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 4;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno Bipolar';
                    break;
                case 'Disfunción Eréctil':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 22;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno de Ereccion';
                    break;
                case 'Anorgasmia':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 23;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Anorgasmia';
                    break;
                case 'Dispareunia':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 25;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastornos de Dispareunia';
                    break;
                case 'Trastorno del deseo sexual':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 21;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Trastorno del Deseo Sexual';
                    break;
                case 'Drogadicción':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 6;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Consumo de Sustancias';
                    break;
                case 'Alcoholismo':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 8;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Alcoholismo';
                    break;
                case 'Alcoholismo':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 8;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Alcoholismo';
                    break;
                case 'Trastorno esquizofrénico':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 33;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Esquizofrenia';
                    break;
                case 'Ejerzo violencia con mis seres queridos':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 20;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Ejerzo violencia con mis seres queridos';
                    break;
                case '¿Sufro violencia de pareja?':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 19;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Violencia de Pareja';
                    break;
                case 'Codependencia':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 10;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Coodependencia';
                    break;
                case '¿Establezco una relación sana de pareja?':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 31;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Establezco una relacion sana con mi pareja';
                    break;
                case 'Relaciones familiares':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 7;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Problemas relacionados con la familia';
                    break;
                case '¿Cómo es la relación con mi hijo adolescente?':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 29;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Como es la relacion con mi hijo adolescente';
                    break;
                case 'Vejez':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 32;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Vejez';
                    break;
                case '¿Mi hijo necesita apoyo psicológico?':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 18;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Como saber si mi hijo necesita apoyo psicologico';
                    break;
                case 'Anorexia':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 11;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Anorexia';
                    break;
                case 'Bulimia':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 9;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Bulimia';
                    break;
                case 'Conflictos en la pareja':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 34;
                    $scope.tipoEval = 0;
                    $scope.subj = 'Conflictos en la pareja';
                    break;
                case 'Ataques de pánico':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 35;
                    $scope.tipoEval = 1;
                    $scope.subj = 'Ataques de pánico';
                    break;
                case 'Estrés postraumático':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 36;
                    $scope.tipoEval = 1;
                    $scope.subj = 'Estrés postraumático';
                    break;
                case 'Ansiedad por separación en niños':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 37;
                    $scope.tipoEval = 1;
                    $scope.subj = 'Ansiedad por separación en niños';
                    break;
                case 'Eyaculación precoz':
                    $scope.noPreguntas = $scope.preguntas.length + 1;
                    $scope.noCuestionario = 24;
                    $scope.tipoEval = 1;
                    $scope.subj = 'Trastorno de eyaculacion precoz';
                    break;                    
            }
        }

    }]);
