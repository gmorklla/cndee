'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('TestCtrl', ['testTitle', '$scope', function(testTitle, $scope) {
        if (screen.width <= 640) {
            $scope.cuantos = 1;
        } else {
            $scope.cuantos = 3;
        }
        $scope.tests = [{
            "url": "ansiedad",
            "titulo": "Ansiedad"
        }, {
            "url": "personalidad_histrionica",
            "titulo": "Personalidad histriónica"
        }, {
            "url": "personalidad_narcisista",
            "titulo": "Personalidad narcisista"
        }, {
            "url": "personalidad_antisocial",
            "titulo": "Personalidad Antisocial"
        }, {
            "url": "depresion",
            "titulo": "Depresión"
        }, {
            "url": "bipolaridad",
            "titulo": "Bipolaridad"
        }, {
            "url": "disfuncion_erectil",
            "titulo": "Disfunción Eréctil"
        }, {
            "url": "anorgasmia",
            "titulo": "Anorgasmia"
        }, {
            "url": "dispareunia",
            "titulo": "Dispareunia"
        }, {
            "url": "trastorno_del_deseo_sexual",
            "titulo": "Trastorno del deseo sexual"
        }, {
            "url": "drogadiccion",
            "titulo": "Drogadicción"
        }, {
            "url": "alcoholismo",
            "titulo": "Alcoholismo"
        }, {
            "url": "violencia_con_seres_queridos",
            "titulo": "Ejerzo violencia con mis seres queridos"
        }, {
            "url": "violencia_de_pareja",
            "titulo": "¿Sufro violencia de pareja?"
        }, {
            "url": "codependencia",
            "titulo": "Codependencia"
        }, {
            "url": "relacion_sana_de_pareja",
            "titulo": "¿Establezco una relación sana de pareja?"
        }, {
            "url": "relaciones_familiares",
            "titulo": "Relaciones familiares"
        }, {
            "url": "relacion_con_mi_hijo_adolescente",
            "titulo": "¿Cómo es la relación con mi hijo adolescente?"
        }, {
            "url": "vejez",
            "titulo": "Vejez"
        }, {
            "url": "anorexia",
            "titulo": "Anorexia"
        }, {
            "url": "bulimia",
            "titulo": "Bulimia"
        }, {
            "url": "celos_en_la_pareja",
            "titulo": "Celos en la pareja"
        }, {
            "url": "ataques_de_panico",
            "titulo": "Ataques de pánico"
        }, {
            "url": "estres_postraumatico",
            "titulo": "Estrés postraumático"
        }, {
            "url": "ansiedad_por_separacion_en_ninos",
            "titulo": "Ansiedad por separación en niños"
        }, {
            "url": "duelo",
            "titulo": "¿Cómo enfrento la muerte de un ser querido?"
        }, {
            "url": "estres",
            "titulo": "Estrés"
        }, {
            "url": "eyaculacion_precoz",
            "titulo": "Eyaculación precoz"
        }, {
            "url": "vaginismo",
            "titulo": "Vaginismo"
        }, {
            "url": "tengo_problemas_con_mi_autoestima",
            "titulo": "¿Tengo problemas con mi autoestima?"
        }, {
            "url": "por_que_es_importante_aceptar_nuestro_destino",
            "titulo": "¿Por qué es importante aceptar nuestro destino?"
        }, {
            "url": "soy_una_persona_mentalmente_sana",
            "titulo": "¿Soy una persona mentalmente sana?"
        }];
        $scope.grabaTitulo = function (txt) {
            testTitle.addTitle(txt);
        };
    }]);
