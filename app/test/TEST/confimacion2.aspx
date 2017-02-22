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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CNDEE - Ser Feliz s&iacute; se puede</title>

<link rel="stylesheet" href="../../estilos.css" type="text/css" charset="utf-8" />

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="../../js/jquery.transit.min.js"></script>
<script type="text/javascript" src="../../js/animate.js"></script>

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
                    <div class="sec menu4">SEXUALIDAD</div>
                    <div class="sec menu5">TEST</div>
                    <div class="sec menu6">CONTACTO</div>
            
            </div>
            
            <div class="linea"></div>
            
            <div class="frameLogo">
            <div class="frameLogoI">
            
            	<a href="../../index.html"><img class="logo" src="../../imagenes/logo.png" border="0" /></a>
                
            <div class="testimonio">	
                
                	<a href="https://www.facebook.com/CNDEE" target="_blank"><div class="facebook"></div></a>
                
            </div>
                
            
            </div>
            </div>
            
            <div class="frase"></div>
        
        </div>
        
<!-- HEAD ------------------------------------------->

<!-- MAIN ------------------------------------------->

		<div class="mainTest">
        
        	<div class="testHead" style="background:url(../../imagenes/confirmacionHead.png) no-repeat center;"></div>
            
            <div class="confirmaSub"></div>
            
            <div class="testTxt" style="background: rgba(255,255,255,0.4); filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#66ffffff, endColorstr=#66ffffff); -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66ffffff, endColorstr=#66ffffff);
">
            
            	<p class="parrafo"><%Response.Write(mensaje)%></p>
             
            </div>
            
            <div class="testCuadro" style="background: url(../../imagenes/confirmaCuadro.png) center no-repeat; margin-top:30px;">
            
            <p><span>Nosotros podemos ayudarte.</span> Revisaremos tu caso, y en un plazo menor a 48 horas, recibir&aacute;s un an&aacute;lisis realizado por nuestros psic&oacute;logos expertos, donde adem&aacute;s, te recomendaremos el tipo de tratamiento adecuado cerca de tu localidad y de acuerdo a tu presupuesto.<br /><br />
            Si tienes dudas o deseas m&aacute;s informaci&oacute;n comun&iacute;cate con  nosotros al <span>Centro Nacional de Diagn&oacute;stico para las Enfermedades Emocionales</span> al  <span>01 800 911 66 66</span> donde con gusto te atenderemos.</p>	
            
            </div>
          
            
            <div class="subMenu" style="top:17px; opacity:1;">
            
            	<ul>
                
                	<li style="margin-left:12px;"><a id="sub1"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub2"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub3"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub4"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub5"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub6"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub7"><img src="../../imagenes/botonI.png" border="0" /></a></li><li><a id="sub8"><img src="../../imagenes/botonI.png" border="0" /></a></li>
                
                </ul>
                
                
            
            </div>
        	
<!-- TEST ------------------------------------------->            
            
            
            
            	
        </div>

<!-- MAIN ------------------------------------------->

<!-- NOTA ------------------------------------------->
		
        <div class="notasC">
        
        	<iframe style="margin-left:20px; margin-top:4px; float:left;" src="../../testFrame.html" scrolling="no" frameborder="0" width="748" height="210"></iframe>
            
            <div class="simitel">
            
                
            	<img class="simitelHead" src="../../imagenes/asesoriaHead.png" />
                <a href="http://www.farmaciasdesimilares.com.mx/simitel.html" target="_blank"><img class="simitelLogo" src="../../imagenes/simitel.png" border="0" /></a>
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
