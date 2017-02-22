
<%@ Import Namespace="testProduccion" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
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
                              <td width="308" valign="bottom" bgcolor="#FFFFFF"><div align="left">Problemas relacionados con la tercera edad</div></td>
                              <td width="270" bgcolor="#F3F1F2"><div align="left"><span class="Estilo17">Recomendaciones para disfrutar de esta etapa</span></div></td>
                            </tr>
                          </table>
                      </div></td>
                      <td width="7" valign="bottom" bgcolor="#F3F1F2" class="Estilo9">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" class="Estilo6"><div align="justify"><img src="../imagenes/bullet_azul.jpg" width="10" height="10" /> El siguiente cuestionario pretende evaluar si existe la posibilidad de que   presentes este trastorno. Contesta <strong>SI</strong> o <strong>NO</strong>.</div></td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo6">&nbsp;</td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo6">&nbsp;</td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" class="Estilo6">
					  <div align="center">
					  <!--INICIA - DATOS DE USUARIO-->
					  <%=ElementosWeb.GeneraTablaDatosUsuario("Vejez")%>
  					  <!--FINALIZA - DATOS DE USUARIO-->
					  </div></td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" class="Estilo6">&nbsp;</td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" class="Estilo6">
					  <!--INICIA - CUESTIONARIO-->
					  <%=ElementosWeb.GeneraCuestionario2Opciones("vejez", 32, "Estilo21", "Estilo6")%>
  					  <!--FINALIZA - CUESTIONARIO-->
					  </td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    
                    
                    <tr>
                      <td valign="bottom" class="Estilo6">&nbsp;</td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo6"><div align="center">Expl&iacute;canos tu caso :<br />
                          <br />
                          Trata de incluir los datos que consideres   importantes para <br />
                          obtener una valoracion m&aacute;s completa.<br />
                      </div></td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="bottom" class="Estilo6"><label>
                        <div align="center">
                          <textarea name="txt_message" rows="6" cols="40"></textarea>
                          </div>
                      </label></td>
                      <td valign="bottom" class="Estilo16">&nbsp;</td>
                    </tr>
                    

                    
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td bgcolor="#F9F7F8" class="Estilo6"><strong>* Datos opcionales. </strong></td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td><table width="204" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                          <td><label>
                            <div align="center">
                              <input name="cmd_envia"  id= 'cmd_envia' type="button" class="Estilo6" value="Evaluar" onclick="try{validaForm(this.form);}catch(e){alert(e.message);}" />
                              </div>
                          </label></td>
                          <td><div align="center">
                            <input name="button" type="reset" class="Estilo6" value="Borrar" />
                          </div></td>
                        </tr>
                      </table></td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td><div id="generated" class="textos"></div></td>
                      <td>&nbsp;</td>
                    </tr>
                                        <tr>
                      <td colspan="2" valign="middle" class="Estilo16">
                          <table>
                              <tr>
                                  <td><a href="Javascript:history.back()"><img alt="Regresar" src="../imagenes/regresar.jpg" width="34" height="35" border="0" /></a></td>
                                  <td><a href="Javascript:history.back()">Regresar</a></td>
                              </tr>
                          </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="2"><div align="center"></div></td>
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
