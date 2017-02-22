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
<head id="Head1" runat="server">
     <title>:: Centro Nacional de Diagnóstico para las Enfermedades Emocionales ::</title>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #1E7ABF;
}
-->
</style>
<link href="../css/estilos.css" rel="stylesheet" type="text/css" />
<script language="javascript1.2" type="text/javascript" src="../js/validaciones.js"></script>

<style type="text/css">
<!--
.Estilo16 {font-size: 12px; color: #333333; font-family: Arial, Helvetica, sans-serif; font-weight: bold; }
.Estilo16 {	color: #666666;
	font-weight: bold;
	font-size: 11px;
}
.Estilo17 {	color: #666666;
	font-size: 14px;
}
.Estilo21 {font-size: 11px}
-->
</style>

<style type="text/css">
<!--
#Layer1 {
	position:absolute;
	left:684px;
	top:261px;
	width:209px;
	height:102px;
	z-index:1;
}
#Layer2 {
	position:absolute;
	left:682px;
	top:280px;
	width:198px;
	height:123px;
	z-index:1;
}
#Layer3 {
	position:absolute;
	left:685px;
	top:292px;
	width:171px;
	height:84px;
	z-index:1;
}
.Estilo11 {font-size: 9px; color: #FFFFFF; }
.Estilo13 {font-size: 11px; color: #666666;}
.Estilo14 {color: #F3F1F2}
.Estilo15 {color: #000000}
a:link {
	color: #666666;
	text-decoration: none;
}
a:visited {
	color: #666666;
	text-decoration: none;
}
a:hover {
	color: #666666;
	text-decoration: none;
}
a:active {
	color: #666666;
	text-decoration: none;
}
-->
</style>
</head>
<body>

<!-- #Include FILE="encabezado.aspx" -->
    <form id="form1" name="form1" method="post" action="">
    <div>
    <table width="590" border="0" align="left" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                    <tr>
                      <td width="583" valign="bottom" bgcolor="#F3F1F2" class="Estilo9"><div align="right">
                          <table width="578" border="0" align="left" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="208" valign="bottom" bgcolor="#FFFFFF"><div align="left">&nbsp;</div></td>
                              <td width="370" bgcolor="#F3F1F2"><div align="left"><span class="Estilo17">&nbsp;</span></div></td>
                            </tr>
                          </table>
                      </div></td>

                    </tr>

                   
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                      
                      <div class="Estilo6">
       
        <div>
        	Tu correo se ha enviado de manera exitosa, <br><br><strong>Resultado de la evaluacion:</strong><br><br><strong><%Response.Write(mensaje)%></strong><br><br>Nosotros podemos ayudarte....<br><br>Revisaremos tu caso, y en un plazo menor a 48 horas, recibirás un análisis realizado por nuestros Psicólogos expertos, donde además, te recomendaremos el tipo de tratamiento adecuado cerca de tu localidad y de acuerdo a tu presupuesto.<br><br>Si tienes dudas o deseas m&aacute;s informaci&oacute;n comun&iacute;cate con  nosotros al <br>Centro Nacional de Diagnostico para las Enfermedades Emocionales al  01 800 911 66 66 donde con gusto te atenderemos.<br><br>
        
        </div>
    
    </div>
                      
                      
                      </td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    
                  </table>
    
    
    </div>
    </form>
<!-- #Include FILE="pie.aspx" -->
</body>
</html>