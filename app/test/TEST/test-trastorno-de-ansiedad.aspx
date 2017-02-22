
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
                              <td width="308" valign="bottom" bgcolor="#FFFFFF"><div align="left">Trastornos de 
                                  personalidad</div></td>
                              <td width="270" bgcolor="#F3F1F2"><div align="left"><span class="Estilo17">Ansiedad</span></div></td>
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
					   <script>function validaForm(form) {var msg = "";if(!form.txt_nombre.value){msg="CNDEE: Debe Proporcionar un Nombre o un Alias";}else if(!form.txt_from.value){msg="CNDEE: Debe Proporcionar un correo electronico";}else if(!form.txt_edad.value){msg="CNDEE: Debe Proporcionar la Edad";}else if(!validaMail(form.txt_from.value)){msg=('CNDEE: El e-mail:   \''+ form.txt_from.value +'\'  no es válido');}else if(!form.txt_message.value){msg="CNDEE: \tPara obtener una valoracion mas completa sobre tu caso favor de comentar brevemente"+"\n\ttu problematica en el espacio de \"comentarios\" para que nuestros psicologos expertos"+"\n\tpuedan realizar una evaluacion mas completa";}else{valida(form);return;}alert(msg);}</script><table width="463" align="center"><tr><td width="34%" align="right" bgcolor="F9F7F8" class="Estilo6">Nombre o NickName :</td><td width="34%" align="right"><input name="txt_nombre" size="20" /></td><td width="32%" align="right">&nbsp;</td></tr><tr><td align="right" bgcolor="F9F7F8" class="Estilo6">E-Mail :</td><td align="right"><input onkeyup="this.value=this.value.toLowerCase()" name="txt_from" size="20" /></td><td align="left" bgcolor="F9F7F8" class="Estilo6">&nbsp;Sexo : &nbsp;F<input type="radio" value="Femenino" name="sexo" /> M<input type="radio" checked="checked" value="Masculino" name="sexo" /></td></tr><tr><td align="right" bgcolor="F9F7F8" class="Estilo6">*Tel&eacute;fono:</td><td align="right"><input onkeypress="try{return acceptNum(event)}catch(e){alert(e.message);}" name="txt_telefono" size="20"/></td><td align="left" bgcolor="F9F7F8" class="Estilo6">&nbsp;Edad :<input onkeypress="try{return acceptNum(event)}catch(e){alert(e.message);}" maxlength="2" size="5" name="txt_edad" /></td></tr><tr><td colspan="2" align="right"><input type="hidden" value="Trastorno de Ansiedad" name="subject" /></td><td align="right">&nbsp;</td></tr></table>
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
					  <script>var nav4 = window.Event ? true : false;function valida(form) {   var elementos = null;   var j=1;   msg="";   var todoOK = true;   var cont = 0;   var numPreguntas = document.getElementById("numpregs").value;   for(var j=1;j<numPreguntas;j++){       elementos = document.getElementsByName("rdbtn_resp_"+j);       if(elementos[0].checked == true){           cont+=parseInt(elementos[0].value);       }else if(elementos[0].checked == false && elementos[1].checked == false){           msg="CNDEE: Debe responder a todas las preguntas, Pregunta ("+j+")";           todoOK = false;           break;       }   }/*End For*/   if (todoOK == true){       muestra(cont);       if(confirm("CNDEE: Se enviara un correo electronico con sus datos a nuestro centro de ayuda"+           "\n\n¿Esta seguro que desea enviar el correo?")){           waitmessage();           form.action="confimacion.aspx";           form.submit();        }   return;   }   alert(msg);   return;}/*End Function*/function muestra(resultado){   document.form1.evaluacion.value=resultado;}/*End Function*/function validaMail(mail) {   var email=/^[A-Za-z0-9][\w-.]+@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;   return(email.test(mail));}/*End Function*/function acceptNum(evt){	   var key = nav4 ? evt.which : evt.keyCode;   return (key <= 13 || (key >= 48 && key <= 57));}/*End Function*/function waitmessage(){var block = document.getElementById("generated");block.innerHTML +=	"<p class='Estilo6'><strong>Espere un momento por favor...</strong>";block.innerHTML +=	"</p>";document.getElementById("cmd_envia").disabled=true;return;}/*End Function*/</script><table width="581" border="0" cellspacing="0" cellpadding="0"><tr><td width="463">&nbsp;</td><td width="58" bgcolor="F9F7F8"><div align="center"><strong><span class="Estilo21">SI</span></strong></div></td><td width="60" bgcolor="F9F7F8"><div align="center"><strong><span class="Estilo21">NO</span></strong></div></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr bgcolor=""><td class="Estilo6"><strong>1.- </strong>Siento una opresión en el pecho, temblores y palpitaciones.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_1" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_1" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>2.- </strong>Mi cuerpo o mis manos sudan la mayor parte del día.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_2" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_2" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>3.- </strong>Me falta el aliento y siento que me ahogo.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_3" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_3" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>4.- </strong>Presento náuseas y dolor abdominal.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_4" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_4" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>5.- </strong>He perdido el apetito sexual.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_5" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_5" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>6.- </strong>Me siento muy intranquilo.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_6" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_6" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>7.- </strong>Presento mareo o sensación de desmayo.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_7" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_7" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>8.- </strong>Mi visión se torna borrosa.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_8" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_8" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>9.- </strong>Siento oleadas de calor o frío.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_9" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_9" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>10.- </strong>Siento rigidez muscular, espasmos o tics nerviosos</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_10" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_10" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>11.- </strong>Tengo miedo de volverme loco/a.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_11" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_11" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>12.- </strong>Tengo un temor intenso sobre lo que podría suceder en el futuro.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_12" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_12" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>13.- </strong>Me causa un gran temor pensar en la muerte.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_13" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_13" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>14.- </strong>Me causa un gran temor salir a la calle, estar en el tráfico o en lugares concurridos.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_14" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_14" /></div></td></tr><tr bgcolor=""><td class="Estilo6"><strong>15.- </strong>He perdido el interés en mis actividades cotidianas.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_15" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_15" /></div></td></tr><tr bgcolor="F9F7F8"><td class="Estilo6"><strong>16.- </strong>Tengo dificultad para dormir o cuando duermo tengo pesadillas y siento que no descanso.</td><td><div align="center"><input type="radio" value="1" name="rdbtn_resp_16" /></div></td><td><div align="center"><input type="radio" value="0" name="rdbtn_resp_16" /></div></td></tr><tr><td><input type="hidden" value="17" name="numpregs" id='numpregs'/>&nbsp;</td><td><input type="hidden" value="12" name="numcuestionario" /></td><td><input type="hidden" value="0" name="evaluacion" /></td></tr></table>
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
                              <input name="cmd_envia" id= 'cmd_envia' type="button" class="Estilo6" value="Evaluar" onclick="try{validaForm(this.form);}catch(e){alert(e.message);}" />
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
