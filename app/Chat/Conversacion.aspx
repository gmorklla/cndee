<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Conversacion.aspx.cs" Inherits="Chat_V2_Cliente.Conversacion" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxGridView" tagprefix="dx" %>
<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxEditors" tagprefix="dx" %>
<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxTimer" tagprefix="dx" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxPanel" tagprefix="dx" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxCallback" tagprefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style>
        audio { 
   display:none;
}
    </style>
</head>
<body style="background-color:white;">
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="scriptManager1" runat="server"></asp:ScriptManager>
            <asp:UpdatePanel ID="UpdatePanelArticle" runat="server">
                <ContentTemplate>
                    <dx:ASPxTimer ID="timerGvChat" runat="server" Interval="1000" Enabled="False" OnTick="timerGvChat_Tick">
                        <ClientSideEvents Tick="function(s, e) {
	//lbChat.PerformCallback();
    //gvChat.Refresh();
}" />
                    </dx:ASPxTimer>
                    <dx:ASPxCallback ID="ASPxCallback1" runat="server" ClientInstanceName="Chat" OnCallback="ASPxCallback1_Callback">
                        <ClientSideEvents CallbackComplete="function(s, e) {
	//gvChat.Refresh();
}" />
                    </dx:ASPxCallback>

                    <asp:Timer ID="Timer1" runat="server" Interval="1000" OnTick="Timer1_Tick">
                    </asp:Timer>

                    <article class="article" id="Articulos" runat="server" style="width: 100%;" onresize="window.scrollTo(0, document.body.scrollHeight);">
                            </article>
                            <% if(int.Parse(Session["LineasTotalesCliente"].ToString()) != int.Parse(Session["LineasActualesCliente"].ToString())){ %>
                                <dx:ASPxLabel id="load" runat="server">
                                    <ClientSideEvents Init="function(s, e) {
	window.scrollTo(0, document.body.scrollHeight);
}" />
                            </dx:ASPxLabel>  
                            <% if (int.Parse(Session["SonidoCliente"].ToString()) != 1)
                               {
                                   Session["SonidoCliente"] = 2;
                                   %>
                                    <audio controls autoplay>
                                      <source src="http://amcalidad/chat/cliente/Sonidos/Bike_Horn.mp3" type="audio/mp3">
                                    Your browser does not support the audio element.
                                    </audio>
                                    <%
                               }
                                else{
                                   %>
                                    <audio controls autoplay>
                                      <source src="http://amcalidad/chat/cliente/Sonidos/Computer_Error_Alert.mp3" type="audio/mp3">
                                    Your browser does not support the audio element.
                                    </audio>
                                    <%
                                }

                               if (int.Parse(Session["SonidoEfectuadoCliente"].ToString()) > 0)
                               {
                                   Session["SonidoEfectuadoCliente"] = int.Parse(Session["SonidoEfectuadoCliente"].ToString()) - 1;
                               }
                               else
                               {
                                   Session["SonidoEfectuadoCliente"] = 0;
                               }
                               Session["SonidoEfectuadoCliente"] = 0;
                               //Session["LineasTotalesCliente"] = Session["LineasActualesCliente"];
                               } %>    
                </ContentTemplate>
            </asp:UpdatePanel>
        </div>
    </form>
</body>
</html>
