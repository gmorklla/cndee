'use strict';

/**
 * @ngdoc overview
 * @name cndeeApp
 * @description
 * # cndeeApp
 *
 * Main module of the application.
 */
var miApp = angular
    .module('cndeeApp', [
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angularUtils.directives.dirPagination',
        'ng.deviceDetector'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        //$locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise("/inicio");

        // Now set up the states
        $stateProvider
            .state('inicio', {
                url: "/inicio",
                'views': {
                    'home': {
                        templateUrl: "views/main.html",
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('nosotros', {
                url: "/nosotros",
                'views': {
                    'home@': {
                        templateUrl: "views/about.html",
                        controller: 'AboutCtrl',
                        controllerAs: 'about'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('admin', {
                url: "/administrador",
                'views': {
                    'home@': {
                        templateUrl: "views/administrador.html",
                        controller: 'AdminCtrl',
                        controllerAs: 'admin'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('salud-emocional', {
                url: "/salud-emocional",
                'views': {
                    'home@': {
                        templateUrl: "views/salud.html",
                        controller: 'SaludCtrl',
                        controllerAs: 'salud'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('salud-emocional.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('sexualidad', {
                url: "/sexualidad",
                'views': {
                    'home@': {
                        templateUrl: "views/sexualidad.html",
                        controller: 'SexCtrl',
                        controllerAs: 'sex'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('sexualidad.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('pareja', {
                url: "/pareja",
                'views': {
                    'home@': {
                        templateUrl: "views/pareja.html",
                        controller: 'ParejaCtrl',
                        controllerAs: 'pareja'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('pareja.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('adicciones', {
                url: "/adicciones",
                'views': {
                    'home@': {
                        templateUrl: "views/adicciones.html",
                        controller: 'AdiccionesCtrl',
                        controllerAs: 'adicciones'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('adicciones.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('familia', {
                url: "/familia",
                'views': {
                    'home@': {
                        templateUrl: "views/familia.html",
                        controller: 'FamiliaCtrl',
                        controllerAs: 'familia'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('familia.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('ninos', {
                url: "/ninos",
                'views': {
                    'home@': {
                        templateUrl: "views/ninos.html",
                        controller: 'NinosCtrl',
                        controllerAs: 'ninos'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('ninos.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('violencia', {
                url: "/violencia",
                'views': {
                    'home@': {
                        templateUrl: "views/violencia.html",
                        controller: 'ViolenciaCtrl',
                        controllerAs: 'violencia'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('violencia.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('tercera-edad', {
                url: "/tercera",
                'views': {
                    'home@': {
                        templateUrl: "views/tercera.html",
                        controller: 'TerceraCtrl',
                        controllerAs: 'tercera'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('tercera-edad.articulo', {
                url: "/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('test', {
                url: "/test",
                'views': {
                    'home@': {
                        templateUrl: "views/test.html",
                        controller: 'TestCtrl',
                        controllerAs: 'test'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('test.cuestionario', {
                url: "/:testId",
                'views': {
                    'home@': {
                        templateUrl: 'views/cuestionario.html',
                        controller: 'CuestionarioCtrl',
                        controllerAs: 'cuestionario'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('test.cuestionario.resultado', {
                url: "/resultado",
                'views': {
                    'home@': {
                        templateUrl: 'views/resultado.html',
                        controller: 'ResultadoCtrl',
                        controllerAs: 'resultado'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                },
                params: { forma: null }
            })
            .state('contacto', {
                url: "/contacto",
                'views': {
                    'home@': {
                        templateUrl: "views/contacto.html",
                        controller: 'ContactCtrl',
                        controllerAs: 'contacto'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            })
            .state('articulo', {
                url: "/articulos/:articuloId",
                'views': {
                    'home@': {
                        templateUrl: 'views/articulo.html',
                        controller: 'ArticuloCtrl',
                        controllerAs: 'articulo'
                    },
                    'barra': {
                        templateUrl: 'views/barra.html',
                        controller: 'BarraCtrl',
                        controllerAs: 'barra'
                    }
                }
            });
    });

miApp.run(['$rootScope', '$window', '$stateParams', '$location', 'angularSeo', 'deviceDetector', function($rootScope, $window, $stateParams, $location, angularSeo, deviceDetector) {

    $window.ga('create', 'UA-8531338-18', 'auto');

    $rootScope.regresa = function() {
        if (deviceDetector.isMobile()) {
            $window.history.go(-1);
            $rootScope.atras = true;
        } else {
            return;
        }        
    };

    $rootScope.$on('$stateChangeStart',
        function(event, toState) {

            $('.notasAlternas').fadeOut(50);

            if ($rootScope.atras === true) {
                $rootScope.atras = false;
            } else {
                $('html,body').stop().animate({
                    scrollTop: 0
                }, 1000, function() {
                    //console.log('Animando...');
                });
            }

            switch (toState.url) {
                case '/inicio':
                    desactiva();
                    $rootScope.inicio = true;
                    break;
                case '/nosotros':
                    desactiva();
                    $rootScope.nosotros = true;
                    break;
                case '/salud-emocional':
                    desactiva();
                    $rootScope.salud = true;
                    break;
                case '/sexualidad':
                    desactiva();
                    $rootScope.sexualidad = true;
                    break;
                case '/test':
                    desactiva();
                    $rootScope.test = true;
                    break;
                case '/contacto':
                    desactiva();
                    $rootScope.contacto = true;
                    break;
            }
        });

    $rootScope.$on('$stateChangeSuccess', function() {
        $window.ga('send', 'pageview', $location.path());
    });

    // Seguimiento de cambios entre estados para cargar o no youtube script, también se usa para colocar títulos de página dinámicos
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
        angularSeo.onStateChange(toState, toParams);
    });

    function desactiva() {
        $rootScope.inicio = false;
        $rootScope.nosotros = false;
        $rootScope.sexualidad = false;
        $rootScope.salud = false;
        $rootScope.contacto = false;
        $rootScope.test = false;
    }

    $(window).scroll(function() {

        var targetScroll = $('#contenido').offset().top,
            currentScroll = $('html').scrollTop() || $('body').scrollTop();

        if (currentScroll >= targetScroll) {
            if ($stateParams.articuloId) {
                $('.notasAlternas').fadeIn("slow");
            }
        } else {
            if ($stateParams.articuloId) {
                $('.notasAlternas').fadeOut("slow");
            }
        }
    });

    $rootScope.legal = function() {
        $('#legal').modal();
    }

    $rootScope.privacidad = function() {
        $('#privacidad').modal();
    }

}]);
