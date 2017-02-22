<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="confimacion.aspx.vb" Inherits="testProduccion.confirmacion" %>

<%  
    Dim mensaje = ""
    Dim tipoEvaluacion As String = ""
    tipoEvaluacion = Request("tipoEvaluacion")
    If tipoEvaluacion = "1" Then
        mensaje = New String(testProduccion.Utilerias.ObtenMensajeDeEvaluacion_EHL(CType(Request("numcuestionario").ToString.Trim, Int16), Request("evaluacion").ToString().Trim))
    Else
        mensaje = New String(testProduccion.Utilerias.ObtenMensajeDeEvaluacion(CType(Request("numcuestionario").ToString.Trim, Int16), Request("evaluacion").ToString().Trim))
    End If
	'Response.write(mensaje)
    EnviaCorreo(mensaje)
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CNDEE - Ser Feliz sí se puede</title>

<link rel="stylesheet" href="../../propuesta/estilos.css" type="text/css" charset="utf-8" />

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="../../propuesta/js/jquery.transit.min.js"></script>
<script type="text/javascript" src="../../propuesta/js/animate.js"></script>

<script type="text/javascript">
        function preloader(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
			confirma();
			todos();
        }//preloader
        window.onload = preloader;//confirmacion.aspx
</script>


</head>

<body>

<div id="loading"></div>

	<div class="marco" id="content">
    
<!-- HEAD ------------------------------------------->    
    
    	<div class="head">
        
        	<div class="menu">
                
                	<div class="sec menu1">INICIO</div>
                    <div class="sec menu2">NOSOTROS</div>
                    <div class="sec menu3">SALUD EMOCIONAL</div>
                    <div class="sec menu4">SERVICIOS</div>
                    <div class="sec menu5">TEST</div>
                    <div class="sec menu6">CONTACTO</div>
            
            </div>
            
            <div class="linea"></div>
            
            <div class="frameLogo">
            <div class="frameLogoI">
            
            	<a href="index.html"><img class="logo" src="../../propuesta/imagenes/logo.png" border="0" /></a>
                <span class="lineaV"></span>
                <div class="testimonio">	
                
                	<div class="tituloTestimonio">TESTIMONIOS</div>
                    <div class="linea" style="margin-left:5px; width:345px; opacity:0.5;"></div>
                    <div class="txtTestimonio">Mil gracias por tomarme en cuenta y por supuesto ke los recomendaré, ya les contaré cómo se resolvió mi asunto saludos hasta luego.</div>
                
                </div>
            
            </div>
            </div>
            
            <div class="frase"></div>
        
        </div>
        
<!-- HEAD ------------------------------------------->

<!-- MAIN ------------------------------------------->

		<div class="mainTest">
        
        	<div class="testHead" style="background:url(../../propuesta/imagenes/confirmacionHead.png) no-repeat center;"></div>
            
            <div class="confirmaSub"></div>
            
            <div class="testTxt" style="height:120px;">
            
            	<p><%Response.Write(mensaje)%></p>
             
            </div>
            
            <div class="testCuadro" style="background: url(../../propuesta/imagenes/confirmaCuadro.png) center no-repeat; margin-top:10px;">
            
            <p><span>Nosotros podemos ayudarte.</span> Revisaremos tu caso, y en un plazo menor a 48 horas, recibirás un análisis realizado por nuestros psicólogos expertos, donde además, te recomendaremos el tipo de tratamiento adecuado cerca de tu localidad y de acuerdo a tu presupuesto.<br /><br />
            Si tienes dudas o deseas m&aacute;s información comunícate con  nosotros al <span>Centro Nacional de Diagnóstico para las Enfermedades Emocionales</span> al  <span>01 800 911 66 66</span> donde con gusto te atenderemos.</p>	
            
            </div>
          
            
            <div class="subMenu" style="top:77px; opacity:1;">
            
            	<ul>
                
                	<li style="margin-left:12px;"><a id="sub1"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub2"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub3"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub4"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub5"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub6"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub7"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li><li><a id="sub8"><img src="../../propuesta/imagenes/botonI.png" border="0" /></a></li>
                
                </ul>
                
                
            
            </div>
            
            <a href="https://www.facebook.com/CNDEE" target="_blank"><div class="facebook" style="top:-580px;"></div></a>
        	
<!-- TEST ------------------------------------------->            
            
            
            
            	
        </div>

<!-- MAIN ------------------------------------------->

<!-- NOTA ------------------------------------------->
		
        <div class="notasC">
        
        	<iframe style="margin-left:20px; margin-top:4px; float:left;" src="disfunciones_sexuales.html" scrolling="no" frameborder="0" width="748" height="210"></iframe>
            
            <div class="simitel">
            
                
            	<img class="simitelHead" src="../../propuesta/imagenes/asesoriaHead.png" />
                <a href="http://www.farmaciasdesimilares.com.mx/simitel.html" target="_blank"><img class="simitelLogo" src="../../propuesta/imagenes/simitel.png" border="0" /></a>
                <div class="bubble1"></div>
                <div class="bubble2"></div>
            
            </div>
        
        </div>


<!-- NOTA ------------------------------------------->

<!-- FOOT ------------------------------------------->

		<div class="footer"><p>© Copyright 2013. Centro Nacional de Diagnóstico para las Enfermedades Emocionales | Aviso legal | Política de privacidad</p></div>

<!-- FOOT ------------------------------------------->


    
    </div>

</body>
</html>
