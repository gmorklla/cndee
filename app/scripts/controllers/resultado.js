'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:ResultadoCtrl
 * @description
 * # ResultadoCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('ResultadoCtrl', ['$scope', '$stateParams', '$http', 'prettyUrl', 'FirebaseRTData', function($scope, $stateParams, $http, prettyUrl, FirebaseRTData) {

        var titulo = $stateParams.testId;
        var forma = $stateParams.forma;
        $scope.titulo = prettyUrl.deconfig($stateParams.testId);

        switch (titulo) {
            case 'ansiedad':
                ansiedad();
                break;
            case 'depresion':
                depresion();
                break;
            case 'bipolaridad':
                bipolaridad();
                break;
            case 'duelo':
                duelo();
                break;
            case 'estres':
                estres();
                break;
            case 'drogadiccion':
                drogadiccion();
                break;
            case 'alcoholismo':
                alcoholismo();
                break;
            case 'bulimia':
                bulimia();
                break;
            case 'anorexia':
                anorexia();
                break;
            case 'violencia_con_seres_queridos':
                violenciaSeresQueridos();
                break;
            case 'violencia_de_pareja':
                violenciaPareja();
                break;
            case 'personalidad_histrionica':
                pHistrionica();
                break;
            case 'personalidad_narcisista':
                pNarcisista();
                break;
            case 'personalidad_antisocial':
                pAntisocial();
                break;
            case 'trastorno_del_deseo_sexual':
                tDeseoSexual();
                break;
            case 'disfuncion_erectil':
                disfuncionE();
                break;
            case 'anorgasmia':
                anorgasmia();
                break;
            case 'eyaculacion_precoz':
                ePrecoz();
                break;
            case 'dispareunia':
                dispareunia();
                break;
            case 'vaginismo':
                vaginismo();
                break;
            case 'codependencia':
                codependencia();
                break;
            case 'relacion_sana_de_pareja':
                relPareja();
                break;
            case 'relacion_con_mi_hijo_adolescente':
                relHijoAdoles();
                break;
            case 'vejez':
                vejez();
                break;
            case 'tengo_problemas_con_mi_autoestima':
                autoestima();
                break;
            case 'por_que_es_importante_aceptar_nuestro_destino':
                destino();
                break;
            case 'soy_una_persona_mentalmente_sana':
                mentalmenteSana();
                break;
            case 'celos_en_la_pareja':
                celos();
                break;
            case 'ataques_de_panico':
                panico();
                break;
            case 'estres_postraumatico':
                postraumatico();
                break;
            case 'ansiedad_por_separacion_en_ninos':
                ansiedadNinos();
                break;
            case 'relaciones_familiares':
                relacionesFamiliares();
                break;
        }

        var mDefault = 'No tenemos elementos suficientes para poder hacer una impresión diagnóstica de lo que sucede. En breve nos pondremos en contacto contigo por el mismo medio, para platicar sobre tus dudas o la posible problemática por la que atraviesas o bien te invitamos a que te comuniques con nosotros, la llamada es gratuita.';

        function sumar() {
            var suma = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                suma += parseInt(forma[part]);
            }
            return suma;
        }

        function relacionesFamiliares() {
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
            }
            if (sumAll <= 8) {
                $scope.mensaje = 'Posiblemente en tu familia se presentan problemas de cooperación, comunicación o apoyo mutuo. Con normas estrictas así como una dificultad para demostrar los afectos o bien solo expresar aquellos considerados como correctos, cayendo en la agresión como medio de control o forma de educación. Esto puede generar diversas reacciones entre sus integrantes, desde la soledad y la sensación de no tener apoyo, hasta la frustración y el enojo por enfrentar los problemas de manera individual; esto puede provocar graves conflictos y desarmonía y desunión familiar. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll >= 10) {
                $scope.mensaje = 'En tu familia se  respeta la individualidad de sus integrantes, así como la expresión de los afectos y sus distintas formas. La comunicación en abierta y clara, con límites fijos pero flexibles que llevan a un crecimiento personal y familiar. Cómo en todas las familias los cambios llevan a generar cierto estrés, con sus habituales cambios de conductas de alguno o varios miembros de la familia. Pero nada que no se pueda arreglar con la asesoría psicológica, ya que como familia cuentan con herramientas para poder adaptarse a los cambios. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 9) {
                $scope.mensaje = 'En tu familia, al parecer, no se respeta la individualidad de sus integrantes, así como la expresión de los afectos y sus distintas formas. La comunicación podría no ser clara, con límites confusos y poco flexibles que llevan a una crisis personal y familiar. Se puede caer fácilmente en la violencia física o verbal confundiéndola con una forma de educar o establecer reglas, alejando toda posibilidad de diálogo y comprensión. Esto puede tener solución con la asesoría psicológica, para poder adaptarse a los cambios. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function ansiedadNinos() {
            var sum1a8 = 0;
            var h11y15 = 0;
            var h9y10y12 = 0;
            var h13y14y16 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 8) {
                    sum1a8 += parseInt(forma[part]);
                } else if (i == 11 || i == 15) {
                    h11y15 += parseInt(forma[part]);
                } else if (i == 9 || i == 10 || i == 12) {
                    h9y10y12 += parseInt(forma[part]);
                } else if (i == 13 || i == 14 || i == 16) {
                    h13y14y16 += parseInt(forma[part]);
                }
            }
            if (sum1a8 >= 3 && h11y15 >= 1) {
                $scope.mensaje = 'El niño presenta síntomas de ansiedad pero estos no son tan graves que le dificulte desarrollarse de manera óptima. El haber pasado por la pérdida de un ser querido o estar atravesando por el divorcio de los padres, pueden llevar al niño a tener estas manifestaciones de ansiedad y angustia; es necesario  acudir a una valoración psicológica para que el niño se vaya adaptando a estos cambios en su entorno. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sum1a8 >= 3 && h9y10y12 >= 1) {
                $scope.mensaje = 'El niño presenta  algunos síntomas de ansiedad, aunque estos síntomas pueden deberse a que presenta  problemas en su conducta, estos pueden deberse a la falta de límites y a la necesidad del niño de obtener lo que desea debido a la sobreprotección de las personas que le rodean.  Es importante valorar la afectación en la vida del chico y familiar para determinar si es necesario acudir a terapia. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sum1a8 >= 3 && h13y14y16 >= 1) {
                $scope.mensaje = 'El niño presenta síntomas de ansiedad que se pueden presentar debido al uso de algún medicamento o bien de un posible brote psicótico. Es necesario que reciba una valoración psicológica y posiblemente paidopsiquiátrica. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumAll <= 2) {
                $scope.mensaje = 'No tenemos elementos suficientes para hacer una impresión diagnóstica de lo que le sucede a tu hijo. En breve nos pondremos en contacto contigo por el mismo medio, para platicar sobre tus dudas o la posible problemática por la que atraviesas o bien te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else {
                $scope.mensaje = 'No tenemos elementos suficientes para hacer una impresión diagnóstica de lo que le sucede a tu hijo. En breve nos pondremos en contacto contigo por el mismo medio, para platicar sobre tus dudas o la posible problemática por la que atraviesas o bien te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            }
            saveData();
        }

        function postraumatico() {
            var sum1a12 = 0;
            var h14y16 = 0;
            var h14y15y16y17 = 0;
            var h13 = 0;
            var h16 = 0;
            var h17 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 12) {
                    sum1a12 += parseInt(forma[part]);
                } else if (i == 14 || i == 16) {
                    h14y16 += parseInt(forma[part]);
                    h14y15y16y17 += parseInt(forma[part]);
                    if (i == 16) {
                        h16 += parseInt(forma[part]);
                    }
                } else if (i == 13) {
                    h13 += parseInt(forma[part]);
                } else if (i == 15 || i == 17) {
                    h14y15y16y17 += parseInt(forma[part]);
                    if (i == 17) {
                        h17 += parseInt(forma[part]);
                    }
                }
            }
            var opcion3 = sum1a12 + h13;
            if (sum1a12 >= 2 && h14y16 >= 1 && h13 == 0) {
                $scope.mensaje = 'Estás presentando síntomas de estrés postraumático debido a haber vivido un hecho reciente violento o catastrófico que te lleva a vivir con miedo y angustia. Esto puede superarse con la ayuda del apoyo psicológico. Te invito a que estés pendiente de la respuesta del psicólogo a tu test. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sum1a12 >= 2 && h13 == 1 && h14y15y16y17 >= 1) {
                $scope.mensaje = 'Estás presentando síntomas de estrés postraumático debido a haber vivido un hecho reciente violento o catastrófico que te lleva a vivir con miedo y angustia. Esto se está combinando con el inicio de una posible adicción que de manera momentánea te lleva a olvidar o sentirte mejor pero que a la larga te va a ocasionar un conflicto mayor. Puedes superar este evento traumático con la ayuda del apoyo psicológico, sin recurrir a algún tipo de droga. Te invito a que estés pendiente de la respuesta del psicólogo a tu test. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (opcion3 >= 2 && h17 == 1) {
                $scope.mensaje = 'Estás presentando síntomas de estrés postraumático de efecto tardío, a pesar de haber vivido un hecho terrible, tus mecanismo de defensa mitigaron los síntomas durante los primeros meses, mismo que ahora se presentan. Puedes superar este evento traumático con la ayuda del apoyo psicológico, CON EL QUE LOGRARAS CONTROLAR LOS SINTOMAS Y APRENDERAS A EXPRESAR TUS EMOCIONES. Te invito a que estés pendiente de la respuesta del psicólogo a tu test. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumAll <= 3) {
                $scope.mensaje = 'No tenemos elementos suficientes para poder hacer una impresión diagnóstica de lo que sucede. En breve nos pondremos en contacto contigo por el mismo medio, para platicar sobre tus dudas o la posible problemática por la que atraviesas o bien te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function panico() {
            var group1 = [15, 20, 21];
            var group2 = [14, 16, 17, 19];
            var group3 = [17, 18];
            var sum1a13 = 0;
            var sumC1 = 0;
            var sumC2 = 0;
            var sumC3 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 13) {
                    sum1a13 += parseInt(forma[part]);
                } else {
                    for (var j = 0; j < group1.length; j++) {
                        if (group1[j] == i) {
                            sumC1 += parseInt(forma[part]);
                        }
                    }
                    for (var j = 0; j < group2.length; j++) {
                        if (group2[j] == i) {
                            sumC2 += parseInt(forma[part]);
                        }
                    }
                    for (var j = 0; j < group3.length; j++) {
                        if (group3[j] == i) {
                            sumC3 += parseInt(forma[part]);
                        }
                    }
                }
            }
            if (sum1a13 >= 3 && sumC1 >= 1) {
                $scope.mensaje = 'Estas presentando un ataque de pánico, debido más a una personalidad ansiosa y con tendencia a ver todo de forma catastrófica; así como una ansiedad anticipada que te lleva a interpretar cualquier signo físico como un nuevo ataque de pánico. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sum1a13 >= 3 && sumC2 >= 1) {
                $scope.mensaje = 'Presentas  un Ataque de Pánico como una reacción del organismo a un evento traumático o noticia que te ha generado una alteración emocional. Así como una posible consecuencia del consumo de algún medicamento,  droga o enfermedad recientemente diagnosticada que te genera ideas catastróficas. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sum1a13 >= 3 && sumC3 >= 1) {
                $scope.mensaje = 'Presentas síntomas de un Ataque de Pánico, pero existe la posibilidad de que estos síntomas estén relacionados con algún tipo de enfermedad. Es necesario ser valorado por un médico cuanto antes posible. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumAll < 6) {
                $scope.mensaje = 'No tenemos elementos suficientes para poder hacer una impresión diagnóstica de lo que te sucede. En breve nos pondremos en contacto contigo por el mismo medio, para que me cuentes cuáles son tus dudas o la posible problemática por la que atraviesas o bien te invitó a que te comuniques con nosotros, la llamada es gratuita.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function celos() {
            var group1 = [1, 2, 9, 10, 14, 16, 21, 23];
            var group2 = [3, 4, 5, 6, 7, 8, 12, 15, 17, 18, 19, 20, 24];
            var group3 = [4, 6, 7, 8, 11, 13, 18, 20, 22, 23];
            var sumC1 = 0;
            var sumC2 = 0;
            var sumC3 = 0;
            var h16y21y23 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                for (var j = 0; j < group1.length; j++) {
                    if (group1[j] == i) {
                        sumC1 += parseInt(forma[part]);
                        if (i == 16 || i == 21 || i == 23) {
                            h16y21y23 += parseInt(forma[part]);
                        }
                    }
                }
                for (var j = 0; j < group2.length; j++) {
                    if (group2[j] == i) {
                        sumC2 += parseInt(forma[part]);
                    }
                }
                for (var j = 0; j < group3.length; j++) {
                    if (group3[j] == i) {
                        sumC3 += parseInt(forma[part]);
                    }
                }
            }
            var opcion2 = sumAll - h16y21y23;
            if (sumC1 >= 6 && sumAll <= 16) {
                $scope.mensaje = 'Presenta una relación de pareja estable, donde hay compromiso, intimidad y pasión. Han aprendido a respetarse como individuos  y a no dejar de lado sus proyectos individuales.  Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumC2 >= 8 && opcion2 <= 16) {
                $scope.mensaje = 'Está teniendo una relación de pareja llena de angustia y desesperación por la fantasía constante de abandono de la pareja existe un vacío interior que se quiere llenar con la relación, esto lleva a tener una visión catastrófica de un futuro sin la pareja. Es necesario trabajar en el control de impulsos y en comenzar a tener actividades que te regresen la confianza en ti y en tu capacidad de poder tener una buena vida con o sin pareja. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumC3 <= 10 && sumAll == 10) {
                $scope.mensaje = 'Está teniendo una relación de pareja donde no hay  intimidad, hay una relación de compañerismo con una relación sexual pasional, con una sensación de posesión hacia tu pareja. Si tienes alguna duda te invitamos a que te comuniques con nosotros, la llamada es gratuita.';
            } else if (sumAll <= 7) {
                $scope.mensaje = 'No tenemos elementos suficientes para poder hacer una impresión diagnóstica de lo que sucede en tu relación. En breve nos pondremos en contacto contigo por el mismo medio, para que me cuentes cuáles son tus dudas o la posible problemática por la que atraviesas o bien te invitó a que te comuniques con nosotros, la llamada es gratuita.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function mentalmenteSana() {
            var suma = sumar();
            if (suma <= 8) {
                $scope.mensaje = 'Es recomendable que busques apoyo profesional, ya que al no expresar tus emociones, y al no adaptarte a las crisis cotidianas de la vida, te puede provocar frustración y obstaculizar tu desarrollo. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 9 && suma <= 15) {
                $scope.mensaje = 'De acuerdo a los datos recibidos te recomendamos fortalecer algunas áreas importantes en tu persona tales como la asertividad, la autoestima y el auto cuidado; dicho proceso se puede llevar a cabo a través del tratamiento psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 16) {
                $scope.mensaje = 'De acuerdo a los datos recibidos no presentas problemas con respecto a tu salud mental, posiblemente hayas atravesado alguna situación conflictiva que te generara enojo, frustración o desanimo. Sin embargo tienes la madurez necesario para adaptarte a los cambios y continuar con esperanza hacia el futuro. Si tienes alguna inquietud al respecto te sugerimos te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function destino() {
            var suma = sumar();
            if (suma >= 3) {
                $scope.mensaje = 'Es probable que deposites en la suerte y en los demás, la responsabilidad de lo que te sucede y de las decisiones que tomas.  El pasado no se puede modificar, el futuro no se puede predecir; es en el presente en donde puedes actuar,  tomando en consideración la experiencia que has adquirido en el pasado y considerando tus expectativas hacia un futuro. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'La frustración y el enojo ocasionados por las situaciones que estés viviendo, te pueden llevar a pensar que el destino o la suerte se confabulan en tu contra. Pero pasado el enojo vuelves a tomar consciencia de la responsabilidad de tus decisiones, generando con ello la capacidad de hacerte responsable de tu vida.';
            }
            saveData();
        }

        function autoestima() {
            var suma = sumar();
            if (suma >= 3) {
                $scope.mensaje = 'Es probable que presentes problemas con tu autoestima, lo cual puede obstaculizar tu sano desarrollo y afectar todas las áreas de tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'Con base en la información recibida no se cuenta con elementos suficientes para realizar una valoración completa, por lo que te invitamos a que te comuniques con nosotros para que nos hagas saber cuáles son las posibles áreas de tu personalidad que se encuentran en conflicto. De cualquier manera te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function vejez() {
            var suma = sumar();
            if (suma >= 3) {
                $scope.mensaje = 'Es probable que la manera en que estás enfrentado la vejez, y la actitud que estás tomando ante las diversas circunstancias que se te  presentan en la vida diaria, te impidan desarrollarte adecuadamente y ser feliz. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'Es probable que en estos momentos de tu vida en los cuales puedes desarrollar diversos cambios físicos y emocionales debido al proceso de natural de envejecimiento que enfrentas, se están generando molestias o conflictos en tu persona, los cuales pueden afectar el área de pareja, familia, laboral o social de tu vida, por lo que te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function relHijoAdoles() {
            var suma = sumar();
            if (suma >= 3) {
                $scope.mensaje = 'Es muy probable que la comunicación que mantienes con tu hijo, y el trato que le das, contribuyan a que surjan conflictos de relación que impidan el adecuado desarrollo familiar. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te podrán ayudar a identificar cuáles son aquellas actitudes tuyas que inconscientemente afectan la autoestima de tu hijo, lo cual  puede  provocar que la actitud de rebeldía o de aislamiento que  presente tu hijo incremente, y deteriore la relación familiar: Recuerda que a mayor control, mayor rebeldía. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'Aunque es probable que existan problemas en cuanto a la comunicación y el respecto mutuo entre tu hijo y tú, no existen elementos suficientes para identificar en que área específica se está afectando la relación; por lo que te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir terapia familiar. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function relPareja() {
            var sum1a9 = 0;
            var sum7a9 = 0;
            var sum10a18 = 0;
            var h2 = 0;
            var h17y18 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 9) {
                    sum1a9 += parseInt(forma[part]);
                    if (i == 2) {
                        h2 += parseInt(forma[part]);
                    }
                }
                if (i == 7 || i == 8 || i == 9) {
                    sum7a9 += parseInt(forma[part]);
                }
                if (i >= 10) {
                    sum10a18 += parseInt(forma[part]);
                    if (i == 17 || i == 18) {
                        h17y18 += parseInt(forma[part]);
                    }
                }
            }
            if (sum1a9 >= 1 && h17y18 >= 1) {
                $scope.mensaje = 'Es probable que existan dificultades de comunicación en tu relación de pareja. No están enfrentando los conflictos de la manera más adecuada, ya que pareciera los estén evadiendo y estén utilizando la agresión y/o la sumisión para tratar de resolverlos, generando un círculo de violencia. Uno de nuestros psicólogos te ayudará sobre las habilidades que puedes desarrollar para mejorar tu relación de pareja así como para  orientarte sobre otras formas funcionales de enfrentar los conflictos. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum7a9 == 3 && sumAll == 3) {
                $scope.mensaje = 'Probablemente presentes problemas en el área de sexualidad, ya sea porque ambos tienen prejuicios o información errónea sobre el tema ,y/o porque manejan valores distintos, por lo que te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda, te invitamos a que te comuniques con nosotros para que nuestros especialistas te ayuden a identificar los obstáculos que presentan en esta área y podamos referirlos con alguna institución donde puedan recibir tratamiento especializado. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum10a18 >= 1 && h2 == 1) {
                $scope.mensaje = 'Es probable que se les dificulte tanto a tu pareja como a ti, el marcar límites con sus familias de origen y/o con sus amigos, lo cual puede deteriorar su relación. Así Como el desarrollo de conflictos debido a la forma en que toman las decisiones, ya sea porque alguno de los dos suele imponerse, lo cual resulta injusto para el otro, o bien, porque no logran realizar acuerdos. Esto les lleva a no reconocer y respetar la individualidad de cada uno, así como el admitir que el hecho de ser pareja no implica cambiar o ser distintos para agradar al otro. Uno de nuestros especialistas te podrán orientar sobre diversas opciones funcionales para mejorar tu situación y, de ser necesario, canalizarte con alguna institución donde puedan recibir apoyo psicológico y resolver sus diferencias. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll <= 6) {
                $scope.mensaje = 'Con base en la evaluación, no encontramos elementos que indiquen que existen problemas graves en tu relación de pareja, sin embargo, si existe alguna situación que te incomode o te inquiete, te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            } else if (sumAll >= 11) {
                $scope.mensaje = 'Con base en la evaluación, tienes una relación de pareja dónde no hay comunicación ni respeto a la individualidad, permiten la intromisión de la familia en sus decisiones como pareja, lo cual puede ocasionar un resentimiento y enojo por no verse respetados. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function codependencia() {
            var suma = sumar();
            if (suma >= 3) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, es probable que presentes problemas en la forma de relacionarte, en donde puede existir la violencia, soledad, y la angustia por el temor de perder a la pareja,  y que continúes al lado de esta pareja a pesar del sufrimiento que te genera el vivir con ella. Es importante tomar acción a la brevedad para evitar que este sufrimiento provocado por la codependencia, te aniquile emocionalmente, y que se  ponga en riesgo tu  salud física y emocional, así como la de tu familia. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'De acuerdo a las respuestas obtenidas, no reúnes los criterios necesarios para determinar que presentas una Relación de Codependencia, sin embargo es importante que revises con el especialista, las situaciones que presentas relacionadas con la autoestima y asertividad (aprender a marcar límites y defenderte, así como a decir y a pedir lo que necesitas), para poder ser independiente, y  lograr con ello, el desarrollo del auto-respeto. De esta manera los demás aprenderán a respetarte: la autoestima es la clave del éxito personal, constituye la herramienta y el "escudo" que nos permite evitar que los demás abusen de nosotros. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function vaginismo() {
            var sumC1 = 0;
            var sumC2 = 0;
            var sumAll = 0;
            var hay1y2 = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 2) {
                    sumC1 += parseInt(forma[part]);
                    sumC2 += parseInt(forma[part]);
                    hay1y2 += parseInt(forma[part]);
                } else if (i == 3 || i >= 5 && i <= 7) {
                    sumC1 += parseInt(forma[part]);
                }
            }
            sumC2 = (sumAll - sumC1) + hay1y2;
            if (sumC1 > 1 && sumC2 - hay1y2 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que presentes un Trastorno de Vaginismo debido a un factor psicológico; te recomendamos realizar una revisión de las ideas o conceptos que tengas con respecto a tu sexualidad, así como los miedos que se generan a través de los mitos o tabúes. La visita al Sexólogo Clínico es de las opciones más recomendadas para poder abordar ésta problemática. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumC2 > 2 && sumC1 - hay1y2 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que padezcas este trastorno debido factores  físicos tales como el presentar algún proceso de cicatrización o cirugía, alguna infección de transmisión sexual, o bien, de presentar alguna deficiencia de estrógenos que provoque una sequedad vaginal. Dichos factores pueden provocar que rechaces las relaciones cóitales por miedo al dolor. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 9) {
                $scope.mensaje = 'Existe la posibilidad de que el Trastorno de Vaginismo que presentas se deba tanto a un factor físico, por lo cual es importante identificar la causa, así como las posibles causas psicológicas tales como la percepción errónea de la sexualidad: divisándola como "indebida","pecaminosa" o "sucia". Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 1) {
                $scope.mensaje = 'La información recavada con el cuestionario no nos brinda elementos suficientes para evaluar que presentas un Trastorno de Vaginismo. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function dispareunia() {
            var sumC1 = 0;
            var sumC2 = 0;
            var sumAll = 0;
            var hay2 = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i <= 2 || i == 4 || i == 7 || i == 8 || i == 12) {
                    if (i == 2) {
                        sumC1 += parseInt(forma[part]);
                        sumC2 += parseInt(forma[part]);
                        hay2 += parseInt(forma[part]);
                    } else {
                        sumC1 += parseInt(forma[part]);
                    }
                } else {
                    sumC2 += parseInt(forma[part]);
                }
            }
            if (sumC1 > 1 && sumC2 - hay2 == 0) {
                $scope.mensaje = 'Existe la posibilidad de que padezcas un Trastorno de Dispareunia debido factores psicológicos como por ejemplo, el haber recibido una educación represiva en este tema.  Es probable también, que si presentas conflictos con tu pareja, éstos también puedan influir en el desarrollo de este trastorno. Es importante consultar a un Sexólogo Clínico, con el objetivo de que puedas conocer más sobre este padecimiento. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumC2 > 1 && sumC1 - hay2 == 0) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que padeces se presente a causa de factores físicos tales como presentar alguna reacción alérgica al método anticonceptivo “de barrera” usado, o bien, presentar dolor a causa de un factor post-quirúrgico que este ocasionándolo. Te recomendamos que visites al especialista, ya sea ginecólogo o urólogo, para que pueda realizar un estudio completo de tu caso y pueda identificar las causas específicas y te informe sobre el tratamiento recomendado. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 11) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que padeces se deba tanto a un factor físico, para el cual es importante identificar la causa, así como a factores psicológicos tales como la percepción a la sexualidad como algo "indebido" o "pecaminoso". Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), y si tienes alguna otra duda te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 1) {
                $scope.mensaje = 'La información proporcionada en el cuestionario no nos brinda elementos suficientes para identificar las posibles causas de un Trastorno de Dispareunia, o bien, para identificar si en realidad lo padeces, por lo que te invitamos a que te comuniques con nosotros para que nos informes sobre la manera en que has desarrollado tu salud física y emocional a lo largo de tu vida. De cualquier manera con los datos que hemos obtenido por parte tuya, realizaremos una valoración de tu caso, la cual te será enviada a tu correo electrónico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function ePrecoz() {
            var sum1y10y11 = 0;
            var sum1a9 = 0;
            var sum10y11 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                sumAll += parseInt(forma[part]);
                if (i == 1 || i >= 10) {
                    if (i == 1) {
                        sum1y10y11 += parseInt(forma[part]);
                        sum1a9 += parseInt(forma[part]);
                    } else {
                        sum1y10y11 += parseInt(forma[part]);
                        sum10y11 += parseInt(forma[part]);
                    }
                } else {
                    sum1a9 += parseInt(forma[part]);
                }
            }
            if (sum1y10y11 == 2 && sumAll == 2) {
                $scope.mensaje = 'Existe la posibilidad de que presentes un Trastorno de Eyaculación Precoz debido a un problema orgánico; esto debe ser valorado por un Médico Urólogo quién deberá informarte sobre los diversos tratamientos. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum1a9 > 2 && sum10y11 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que presentas se deba a una situación de aprendizaje; es decir, por algún motivo, es probable que no te sea posible reconocer la sensación de eyaculación, y no has aprendido a detenerla. Este caso se puede tratar a través de un Sexólogo Clínico, quien podrá brindarte la asesoría y tratamiento adecuados, los cuales suelen tener buenos resultados en un plazo relativamente corto. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 10) {
                $scope.mensaje = 'La posible causa de la Eyaculación Precoz que presentas, puede ser ocasionada por factores físicos y emocionales tales como problemas de próstata y la incapacidad para poder reconocer la sensación de la eyaculación y de controlar ésta eyaculación inminente. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 1) {
                $scope.mensaje = 'Con la información proporcionada en el cuestionario, no existen elementos suficientes para evaluar si efectivamente presentas este trastorno, o bien, para identificar cuales podrían ser las causas,  por lo que te invitamos a que te comuniques con nosotros para que nos informes sobre la manera en que has desarrollado tu salud física y emocional a lo largo de tu vida. De cualquier manera con los datos que hemos obtenido por parte tuya, realizaremos una valoración de tu caso, la cual te será enviada a tu correo electrónico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function anorgasmia() {
            var suma = sumar();
            var sum1y7a10 = 0;
            var sum2a6 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                if (i == 1 || i >= 7) {
                    sum1y7a10 += parseInt(forma[part]);
                } else {
                    sum2a6 += parseInt(forma[part]);
                }
            }
            sumAll = sum1y7a10 + sum2a6;
            if (sum1y7a10 > 1 && sum2a6 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que padezcas un Trastorno Orgásmico, debido a una causa física;  es necesario que te valore un medico especialista esto es un ginecólogo o urólogo, para determinar la causa y el tratamiento. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum2a6 > 1 && sum1y7a10 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que presentas surja a raíz de una situación psicológica y emocional. Te sugerimos que realices una exploración estudio de cómo se encuentra tu actual relación de pareja con el objetivo de que puedas identificar los diversos factores estresantes que pueden ocasionar este trastorno. Para conocer más al respecto, te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 9) {
                $scope.mensaje = 'El Trastorno Orgásmico que probablemente presentes, se  debe a una combinación de un factor físico con una problemática emocional. Es importante abordar ambos aspectos con el Médico Urólogo y el Sexólogo Clínico para encontrar una solución al conflicto. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll == 1) {
                $scope.mensaje = 'Es probable que presentes un Trastorno Orgásmico, el cual te puede ocasionar frustración o angustia al momento de tener una relación sexual. Con la información proporcionada en el cuestionario no tenemos elementos suficientes para poder identificar las causas, o bien, para conocer que tan frecuente presentas esta situación. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function disfuncionE() {
            var sum1a2y9a11 = 0;
            var sum3a8 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                if (i <= 2 || i >= 9) {
                    sum1a2y9a11 += parseInt(forma[part]);
                } else {
                    sum3a8 += parseInt(forma[part]);
                }
            }
            sumAll = sum1a2y9a11 + sum3a8;
            console.log(sum1a2y9a11, sum3a8);
            if (sum1a2y9a11 > 2) {
                $scope.mensaje = 'Existe la posibilidad de que presentes un Trastorno de Disfunción Eréctil debido a una causa física. Es necesario que te realice una valoración el Médico Urólogo para poder determinar el origen y el posible tratamiento, el cual puede ser a través de ingerir medicamentos o de implementar métodos quirúrgicos. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum3a8 > 1 && sum1a2y9a11 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que el trastorno que presentas, se este deba a factores  psicológicos. Te invitamos a que realices una exploración de cómo está tu actual relación de pareja (revisa si presentas conflictos fuertes) así como de la manera en que organizas tu vida, ya que si encuentras factores estresantes en alguna área de tu vida, es muy probable que esto pueda provocar que presentes un Trastorno de Erección. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll > 5) {
                $scope.mensaje = 'La Disfunción Eréctil se puede presentar debido a una combinación de un factor físico con una problemática emocional. Es importante abordar ambos aspectos para solucionar el conflicto. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sumAll <= 1) {
                $scope.mensaje = 'Con la información proporcionada en el cuestionario, no contamos con los elementos suficientes para poder identificar las causas, o bien, para identificar si realmente  presentas este trastorno. Te pedimos que te comuniques con nosotros para conocer cómo has desarrollado tu salud física y emocional a lo largo de tu vida, y poder realizar una valoración más completa de tu problemática. De cualquier manera te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function tDeseoSexual() {
            var sum1a9 = 0;
            var sum10a12 = 0;
            var sumAll = 0;
            var num = parseInt(forma.numPregs);
            for (var i = 1; i <= num; i++) {
                var part = 'pregunta_' + i;
                if (i <= 9) {
                    sum1a9 += parseInt(forma[part]);
                } else {
                    sum10a12 += parseInt(forma[part]);
                }
            }
            sumAll = sum1a9 + sum10a12;
            console.log(sum1a9, sum10a12);
            if (sum1a9 > 0 && sum10a12 === 0) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que presentas sea ocasionado por la percepción que manifiestas sobre la sexualidad, o bien, por poseer conceptos erróneos sobre el tema. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum1a9 === 0 && sum10a12 > 0) {
                $scope.mensaje = 'Existe la posibilidad de que el Trastorno del Deseo Sexual que  presentas, se deba a factores físicos, por lo cual es importante que acudas a un chequeo médico con el ginecólogo o urólogo según sea el caso. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (sum1a9 > 1 && sum10a12 > 0) {
                $scope.mensaje = 'Existe la posibilidad de que este trastorno que presentas, se deba tanto a factores físicos como psicológicos, como por ejemplo, la forma en la que percibes la sexualidad, por lo cual es importante que acudas, primeramente a un chequeo médico, para descartar el factor físico y visitar posteriormente a algún Sexólogo Clínico  para evaluar los factores psicológicos y emocionales. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = 'Con la información proporcionada en el cuestionario, no contamos con los elementos suficientes para poder identificar las causas, o bien, para identificar si realmente  presentas este trastorno. Te pedimos que te comuniques con nosotros para conocer cómo has desarrollado tu salud física y emocional a lo largo de tu vida, y poder realizar, de acuerdo a esta información, una valoración más completa de tu problemática. De cualquier manera te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function pAntisocial() {
            var suma = sumar();
            if (suma <= 5) {
                $scope.mensaje = 'De acuerdo con los datos obtenidos, no se cuenta con los elementos necesarios para determinar si padeces este trastorno. Puede que se esté presentando en tu vida una serie de conflictos que te lleven a estar enojado y agresivo, pero no a llegar a utilizar o dañar a las personas ya que el remordimiento te lo impediría. Si tienes alguna duda te invitamos a que te comuniques con alguno de nuestros psicólogos en línea.';
            } else if (suma >= 6) {
                $scope.mensaje = 'De acuerdo con los resultados que obtuviste es probable que presentes este trastorno, y por lo tanto, que varias áreas de tu vida se puedan ver afectadas, y sobre todo, es muy posible que presentes problemas de relación y conflictos, en tus relaciones interpersonales. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function pNarcisista() {
            var suma = sumar();
            if (suma <= 5) {
                $scope.mensaje = 'De acuerdo con los datos que obtenidos, no se cuenta con los elementos necesarios para determinar si padeces de un Trastorno de Personalidad Narcisista, en caso de que percibas que presentas problemas de relación con tus semejantes, y consideres que los demás no te entienden o no te valoran, como quisieras, te aconsejamos que busques apoyo profesional y te comuniques con nosotros. De cualquier manera, te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico.';
            } else if (suma >= 6) {
                $scope.mensaje = 'De acuerdo con los resultados que obtuviste es probable que  presentes este trastorno, por las diversas  áreas de tu vida tales como la de pareja, familia, social  y laboral se puedan ver afectadas. Te pedimos que te comuniques con nosotros para que nuestros especialistas te puedan informar y orientar al respecto.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function pHistrionica() {
            var suma = sumar();
            if (suma <= 5) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, no se cuentan con los elementos necesarios para determinar si padeces de un Trastorno de Personalidad Histriónico, en caso de que percibas que tengas problemas con tus relaciones y se te dificulte controlar tus emociones; te aconsejamos que nos llames para que nuestros especialistas te puedan informar y orientar al respecto. De cualquier manera, te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 6) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, es probable que presentes este trastorno, y por lo tanto que diversas áreas de tu vida se vean afectadas debido a la dificultad que presentas para controlar tus emociones; es importante atender a tiempo esta problemática para evitar que tus síntomas incrementen, y llegues a sentirte solo, incomprendido, y que presentes importantes conflictos en tus relaciones interpersonales. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function violenciaPareja() {
            var suma = sumar();
            if (suma < 2) {
                $scope.mensaje = 'En base a la información recibida no se cuenta con elementos suficientes para realizar una valoración completa,  sin embargo, si existen algunas situaciones que te produzcan conflicto, y angustia, en tu relación de pareja o familia, te sugerimos que busques apoyo profesional. De cualquier manera te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 2) {
                $scope.mensaje = 'Es probable que padezcas una situación de violencia la cual podría ser peligrosa tanto para ti como para tu familia, por lo que es necesario que busques apoyo profesional. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function violenciaSeresQueridos() {
            var suma = sumar();
            if (suma < 2) {
                $scope.mensaje = 'En base a la información recibida no se cuenta con elementos suficientes para realizar una valoración completa, sin embargo, si existen algunas situaciones que te produzcan conflicto, y angustia, te sugerimos que busques apoyo profesional para que obtengas información y asesoría. De cualquier manera te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 2) {
                $scope.mensaje = 'Es probable que presentes problemas con tu AGRESIVIDAD, lo cual puede desencadenar problemas de violencia que pongan en riesgo la estabilidad y la salud de tu familia. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function anorexia() {
            var suma = sumar();
            if (suma <= 2) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, no se reúnen los criterios para diagnosticar un Trastorno de la Conducta Alimentaría. Si consideras que tu forma de comer te ocasiona conflictos físicos o emocionales, te recomendamos que te comuniques con nosotros para que nuestros especialistas te brinden la orientación adecuada. De cualquier manera, te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 3) {
                $scope.mensaje = 'De acuerdo con los resultados que obtuviste, es probable que  presentes un Trastorno de Anorexia. Sabemos que la imagen corporal es muy importante para ti, sin embargo, si no atiendes a tiempo tu salud física y emocional, los síntomas pueden incrementar y poner en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function bulimia() {
            var suma = sumar();
            if (suma <= 2) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, no se reúnen los criterios para diagnosticar un Trastorno  de la Conducta Alimentaría. Si consideras que tu forma de comer te ocasiona conflictos físicos o emocionales, es importante que busques apoyo profesional, para evitar que los síntomas incrementen y se ponga en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 3) {
                $scope.mensaje = 'De acuerdo con los resultados obtenidos, es probable que  presentes un Trastorno de Bulimia. Sabemos que la imagen corporal es muy importante para ti, sin embargo si no atiendes a tiempo tu salud física y emocional, los síntomas pueden incrementar y  poner en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function alcoholismo() {
            var suma = sumar();
            if (suma <= 2) {
                $scope.mensaje = 'De acuerdo a los resultados obtenidos no existen los elementos necesarios para determinar que presentes problemas con tu forma de beber, sin embargo el consumo periódico del alcohol,  te puede generar la dependencia a la sustancia, y  sin que te des cuenta, esto te puede provocar la adicción a una de las enfermedades mortales más destructivas: el Alcoholismo. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 3) {
                $scope.mensaje = 'De acuerdo con los datos obtenidos es probable que presentes problemas con tu forma de beber, lo cual puede incrementar y provocarte severos daños físicos y emocionales.  El tratamiento y recuperación del alcoholismo requieren de un gran compromiso por parte del paciente; existen diversas alternativas de tratamiento que pueden ayudar a salir adelante, así como a impedir que el alcoholismo acabe con tu vida y con la de tus seres queridos. Es importante que rescates tu vida y busques apoyo profesional pronto, para evitar que este padecimiento mortal te aniquile. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function drogadiccion() {
            var suma = sumar();
            if (suma === 0) {
                $scope.mensaje = 'De acuerdo con las respuestas obtenidas, no reúnes los criterios necesarios para determinar que padeces alguna adicción, sin embargo incluso el consumo experimental y ocasional de cualquier sustancia psicotrópica puede ser un puente hacia la adicción, la cual puede terminar con tu vida.; recuerda que la prevención es el mejor tratamiento. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros, nuestra comunicación será estrictamente confidencial.';
            } else {
                $scope.mensaje = 'De acuerdo con los datos obtenidos es probable que presentes un problema de adicción, la cual es una enfermedad mortal que crece día con día y que si no se atiende a tiempo puede interferir con tu pleno desarrollo, así como terminar con tu vida y con la de tus seres queridos. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Toda la información que se genere será totalmente confidencial. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            }
            saveData();
        }

        function estres() {
            var suma = sumar();
            if (suma >= 4 && suma <= 10) {
                $scope.mensaje = 'De acuerdo con los puntajes obtenidos existen indicadores de estrés en tu vida, los cuales no te causan, al parecer, un conflicto grave; el buscar  formas de canalizarlo, te puede ayudar a que este no se incremente y pueda convertirse en un trastorno. Te sugerimos que realices un reacomodo en tu vida y organices cada una de las situaciones que te provocan estrés y le des seguimiento a cada un a de ellas por orden de importancia. Para reducir el estrés es importante no querer resolverlas todas al mismo tiempo. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 11 && suma <= 21) {
                $scope.mensaje = 'De acuerdo con los datos, podemos mencionarte que el estrés puede formar parte de tu vida diaria lo cual te puede provocar un Trastorno de Ansiedad, y dañar  considerablemente tu salud física y emocional. Te sugerimos que realices un reacomodo en tu vida y organices cada una de las situaciones que te provocan estrés y le des seguimiento a cada un a de ellas por orden de importancia. Para reducir el estrés es importante no querer resolverlas todas al mismo tiempo. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 22 && suma <= 31) {
                $scope.mensaje = 'De acuerdo con los puntajes obtenidos, el estrés forma parte en tu vida diaria, lo cual es probable que afecte varias áreas de tu vida tales como: falta de memoria, agotamiento, irritabilidad y problemas físicos, lo cual puede poner en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema, te informarán sobre diversas formas funcionales para manejar el estrés,  y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 32 && suma <= 42) {
                $scope.mensaje = 'De acuerdo con los puntajes obtenidos, el estrés forma parte en tu vida diaria, lo cual es probable que afecte varias áreas de tu vida tales como: falta de memoria, agotamiento, irritabilidad y problemas físicos, lo cual puede poner en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema, te informarán sobre diversas formas funcionales para manejar el estrés,  y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function duelo() {
            var suma = sumar();
            if (suma <= 15) {
                $scope.mensaje = 'De acuerdo con el puntaje obtenido, el duelo como proceso, parece haber terminado en tu vida, y en este caso, lo que presentes, quizás sea algún otro Trastorno del Estado de Animo como la depresión por ejemplo; es muy importante que busques ayuda profesional para que puedas salir adelante, y ser feliz. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 16 && suma <= 20) {
                $scope.mensaje = 'De acuerdo con las respuestas obtenidas, es muy probable que el proceso de duelo que presentas, no ha seguido un proceso satisfactorio, para aceptar la pérdida del ser querido, y de alguna manera permaneces ligado a la persona que falleció; posiblemente tu dolor sea tan grande, que te impida continuar con tu vida, y aceptar ésta perdida. Esto puede bloquear tu desarrollo, y llevarte a desarrollar una depresión severa que pueda poner en riesgo tu  salud física y emocional. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría obre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 21) {
                $scope.mensaje = 'De acuerdo con las respuestas obtenidas, existe efectivamente un cambio en la conducta, como el miedo o temor a salir a la calle; sin embargo este cambio probablemente no te limite a continuar con tu vida cotidiana. Es importante que busques ayuda profesional para evitar que en un futuro este temor  pueda incrementar y se convierta en un trastorno. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function bipolaridad() {
            var suma = sumar();
            if (suma >= 4 && suma <= 10) {
                $scope.mensaje = 'De acuerdo a los datos obtenidos no se cumplen con los criterios para determinar que existe un Trastorno Bipolar, sin embargo pueden existir cambios en tu estado de ánimo radicales por los que te recomendamos que realices un diagnóstico (por medio de un especialista) profundo sobre tu problemática, para descartar que estos síntomas incrementen y se ponga en riesgo tu vida. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 11 && suma <= 21) {
                $scope.mensaje = 'De acuerdo con los datos obtenidos es probable que presentes un Trastorno Bipolar; es necesario que busques ayuda y tratamiento de inmediato, ya que este trastorno si no es atendido a tiempo, puede poner en riesgo tu vida, tu salud física, tu economía y la relación con tus seres queridos. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma >= 22 && suma <= 42) {
                $scope.mensaje = 'De acuerdo con los datos obtenidos es probable que presentes un Trastorno Bipolar, es necesario que busques ayuda y tratamiento de inmediato, ya que este trastorno si no es atendido a tiempo, se puede poner en riesgo tu vida, tu salud física, tu economía y la relación con tus seres queridos. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas de tratamiento. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function depresion() {
            var suma = sumar();
            if (suma <= 5) {
                $scope.mensaje = 'Es probable que no presentes un Trastorno del Estado de Animo como tal, sin embargo, es importante mencionar que los síntomas de tristeza o apatía que probablemente presentes, pueden  incrementar si no atiendes tus emociones y volverse entonces una depresión; por tal motivo es importante que trates de identificar las causas que los provocan y busques ayuda profesional: de ti depende el salir adelante. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma > 5) {
                $scope.mensaje = 'Es recomendable que busques apoyo profesional, ya que podrías presentar un Trastorno del Estado de Ánimo, lo cual puede afectar seriamente todas las áreas de tu vida, ya que la apatía que presentas te puede impedir que enfrentes adecuadamente todas las situaciones que se presentan en la vida cotidiana. La depresión si no es atendida a tiempo puede provocar la muerte del paciente. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function ansiedad() {
            var suma = sumar();
            if (suma <= 4) {
                $scope.mensaje = 'De acuerdo con los datos recibidos, es probable que no presentes un Trastorno de Ansiedad como tal, sin embargo, te recomendamos que atiendas tu salud emocional y que busques alternativas para liberarte del estrés, ya que los síntomas que presentas pueden empeorar, y entonces podrá existir la posibilidad de que desarrolles dicho padecimiento. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else if (suma > 4) {
                $scope.mensaje = 'De acuerdo con los datos recibidos, es probable que presentes un Trastorno de Ansiedad. Te recomendamos que atiendas tu salud emocional y que busques ayuda profesional, ya que los síntomas que presentas ,si no son atendidos oportunamente, pueden empeorar y entonces afectar tu vida en el área de pareja, familia, laboral y social. Este padecimiento incluso, te puede impedir salir de tu casa y realizar tus actividades cotidianas. Te sugerimos que revises la valoración de tu caso (la cual te será enviada a tu correo electrónico), donde nuestros especialistas te ofrecerán asesoría sobre este tema y te informarán sobre diversas alternativas para enfrentar tu situación, incluyendo el recibir apoyo psicológico. Si tienes alguna otra duda, te invitamos a que te comuniques con nosotros.';
            } else {
                $scope.mensaje = mDefault;
            }
            saveData();
        }

        function saveData() {
            var d = new Date();
            var n = d.getTime();
            var ref = FirebaseRTData.ref('test/' + $scope.titulo);
            var refNot = FirebaseRTData.ref('notificacion');
            var newEntry = ref.push();
            forma.respuesta = $scope.mensaje;
            forma.checado = false;
            forma.fecha = n;
            newEntry.set(forma);
            refNot.set({ nombre: forma.subject, fecha: n })
                .then(function() {
                    console.log('Synchronization succeeded');
                })
                .catch(function(error) {
                    console.log('Synchronization failed');
                });
            /*var path = newEntry.toString();
            console.log(path);*/
        }

    }]);
