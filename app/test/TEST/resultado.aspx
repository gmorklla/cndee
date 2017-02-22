<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="confimacion.aspx.vb" Inherits="testProduccion.confirmacion" %>

<%  
    Dim mensaje = ""
    Dim tipoEvaluacion As String = ""
    tipoEvaluacion = Request("tipoEvaluacion")
    'Response.Write("Calificaion" & Request("evaluacion"))
    If tipoEvaluacion = "1" Then
        mensaje = New String(testProduccion.Utilerias.ObtenMensajeDeEvaluacion_EHL(CType(Request("numcuestionario").ToString.Trim, Int16), Request("evaluacion").ToString().Trim))
    Else
        mensaje = New String(testProduccion.Utilerias.ObtenMensajeDeEvaluacion(CType(Request("numcuestionario").ToString.Trim, Int16), Request("evaluacion").ToString().Trim))
    End If
    'Response.write(mensaje)
    try
        EnviaCorreo(mensaje)
    catch ex as Exception
    end try
 %>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Resultado</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../styles/main.css">
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <!-- endbuild -->
</head>

<body>
    <!--[if lte IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <!-- Add your site or application content here -->
    <div class="header">
        <div id="navegacion" class="navbar navbar-default" role="navigation">
            <div class="container navegacion">
                <div class="navbar-header">
                    <div class="row">
                        <div class="col-xs-8 col-sm-8 visible-xs visible-sm hidden-md hidden-lg">
                            <p>
                                <a href="inicio"><img src="../../images/logo.png" alt="CNDEE logo"></a>
                            </p>
                        </div>
                        <div class="col-xs-4 col-sm-4">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="js-navbar-collapse">
                    <div class="hidden-md hidden-lg navTitle">Secciones</div>
                    <ul class="nav navbar-nav">
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/inicio"><span>Inicio</span></a>
                            <a class="hvr-sweep-to-left hidden-md hidden-lg" href="../../#/inicio" data-toggle="collapse" data-target=".navbar-collapse"><span>Inicio</span></a>
                        </li>
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/nosotros"><span>Nosotros</span></a>
                            <a class="hvr-sweep-to-left  hidden-md hidden-lg" href="../../#/nosotros" data-toggle="collapse" data-target=".navbar-collapse"><span>Nosotros</span></a>
                        </li>
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/salud-emocional"><span>Salud emocional</span></a>
                            <a class="hvr-sweep-to-left hidden-md hidden-lg" href="../../#/salud-emocional" data-toggle="collapse" data-target=".navbar-collapse"><span>Salud emocional</span></a>
                        </li>
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/sexualidad"><span>Sexualidad</span></a>
                            <a class="hvr-sweep-to-left hidden-md hidden-lg" href="../../#/sexualidad" data-toggle="collapse" data-target=".navbar-collapse"><span>Sexualidad</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/pareja" data-toggle="collapse" data-target=".navbar-collapse"><span>Pareja</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/adicciones" data-toggle="collapse" data-target=".navbar-collapse"><span>Adicciones</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/familia" data-toggle="collapse" data-target=".navbar-collapse"><span>Familia</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/ninos" data-toggle="collapse" data-target=".navbar-collapse"><span>Niños</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/violencia" data-toggle="collapse" data-target=".navbar-collapse"><span>Violencia</span></a>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <a class="hvr-sweep-to-left" href="../../#/tercera-edad" data-toggle="collapse" data-target=".navbar-collapse"><span>Tercera Edad</span></a>
                        </li>
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/test"><span>Test</span></a>
                            <a class="hvr-sweep-to-left hidden-md hidden-lg" href="../../#/test" data-toggle="collapse" data-target=".navbar-collapse"><span>Test</span></a>
                        </li>
                        <li>
                            <a class="hvr-sweep-to-left hidden-xs hidden-sm" href="../../#/contacto"><span>Contacto</span></a>
                            <a class="hvr-sweep-to-left hidden-md hidden-lg" href="../../#/contacto" data-toggle="collapse" data-target=".navbar-collapse"><span>Contacto</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="jumbotron logot hidden-sm hidden-xs">
        <a href="inicio"><img src="../../images/logo.png" alt="CNDEE logo"></a>
    </div>
    <div class="jumbotron slogan">
        <p>Queremos ayudarte a ver tu vida desde un punto de vista diferente.</p>
    </div>
    <div class="jumbotron views">
        <div class="row marketing">
          <div class="col-md-12 s1">
            <div class="row saludRow">
              <div class="visible-xs visible-sm hidden-md hidden-lg col-md-12 redes">
                <ul class="row">
                  <li class="pull-left col-xs-3"><a class="hvr-pop" href=""><i class="fa fa-comment fa-2x"></i></a></li>
                  <li class="pull-left col-xs-3"><a class="hvr-pop" href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                  <li class="pull-left col-xs-3"><a class="hvr-pop" href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                  <li class="pull-left col-xs-3"><a class="hvr-pop" href=""><i class="fa fa-play-circle-o fa-2x"></i></a></li>
                </ul>
              </div>
              <div class="hidden-xs hidden-sm visible-md visible-lg col-md-1 redes">
                <ul>
                  <li class="pull-left"><a class="hvr-pop" href=""><i class="fa fa-comment fa-2x"></i></a></li>
                  <li class="pull-left"><a class="hvr-pop" href=""><i class="fa fa-share-alt fa-2x"></i></a></li>
                </ul>
              </div>      
              <div class="col-md-12 saludEmocional">
                <h1 class="hidden-xs hidden-sm">Test</h1>
                <img class="hidden-xs hidden-sm" src="../../images/headsLine-md.png" alt="">
                <p class="hidden-md hidden-lg"><img src="../../images/headsLine-xs.png" alt=""></p>
              </div>
              <div class="col-md-12 hidden-md hidden-lg titleInteriores-xs">
                <h1>Test</h1>
                <p class="hidden-md hidden-lg"><img src="../../images/headsLine-xs.png" alt=""></p>
              </div>
            </div>
          </div>

          <div class="col-md-12 saludBtns">
            <div class="btn-group btn-group-justified" role="group" aria-label="...">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default">
                  <span>RESULTADO DE LA EVALUACION</span>
                </button>
              </div>
            </div>
          </div>

          <dir-pagination-controls class="paginacionSalud col-md-12 col-sm-12 col-xs-12" pagination-id="testItems" max-size="5"></dir-pagination-controls>  

          <div class="col-md-12 saludJum" style="margin-top: -33px;">
            <div class="jumbotron">
              <div class="container">
                <p style="text-align:left;"><%Response.Write(mensaje)%></p>
              </div>
            </div>

          </div>

          <div class="hidden-xs hidden-sm col-md-12 barraOC">
            <div class="row">
              <div class="barraO">
                <p><a href="../../#/salud-emocional">Salud Emocional</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/sexualidad">Sexualidad</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/pareja">Pareja</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/adicciones">Adicciones</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/familia">Familia</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/ninos">Ni&ntilde;os</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/violencia">Violencia</a></p>
              </div>
              <div class="barraO">
                <p><a href="../../#/tercera-edad">Tercera Edad</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-12 barraSex">
            <p class="hidden-xs hidden-sm">Tienes dudas sobre alg&uacute;n tema de Sexualidad, ve nuestro <span>CHAT de SEXUALIDAD</span> todos los <span>martes y jueves</span> de 16:00 a 17:00 hrs, a trav&eacute;s de: <a href="http://www.simiinforma.com.mx/" target="_blank">www. siminforma.com.mx</a></p>
            <p class="hidden-md hidden-lg"><span>CHAT de SEXUALIDAD</span> martes y jueves 4:00 - 5:00 hrs <a href="http://www.simiinforma.com.mx/" target="_blank">www. siminforma.com.mx</a></p>    
          </div>   
        </div>          
         
        </div>
    </div>
    <!-- SIMINOTAS -->
    <div class="footer">
        <div class="container">
            <p>Centro Nacional de Diagnostico para las Enfermedades Emocionales | Aviso legal | Aviso de privacidad</p>
        </div>
    </div>    
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
    <script>
    ! function(A, n, g, u, l, a, r) {
        A.GoogleAnalyticsObject = l, A[l] = A[l] || function() {
                (A[l].q = A[l].q || []).push(arguments)
            }, A[l].l = +new Date, a = n.createElement(g),
            r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)
    }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-8531338-18');
    ga('send', 'pageview');
    </script>
    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="https://code.jquery.com/jquery-2.2.1.min.js" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <!-- endbower -->
</body>

</html>
