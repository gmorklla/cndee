<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Chat.aspx.cs" Inherits="Chat_V2_Cliente.Chat" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxGridView" tagprefix="dx" %>
<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxEditors" tagprefix="dx" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxTimer" tagprefix="dx" %>
<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxHiddenField" tagprefix="dx" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxCallback" tagprefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" aria-readonly="False" aria-haspopup="False">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link href="CSSs/Chat.css" rel="stylesheet" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>SIMICHAT</title>
    <script type="text/javascript">
        w = 290;
        h = 430;

        wleft = (screen.width - w) / 2;
        wtop = (screen.height - h) / 2;

        if (wleft < 0) {
            w = screen.width;
            wleft = 0;
        }
        if (wtop < 0) {
            h = screen.height;
            wtop = 0;
        }

        //
        window.resizeTo(w, h);
        window.moveTo(wleft, wtop);
        
        
    </script>
</head>
<body>
    
    <div class="divContendioChat" draggable="auto">
        <form id="form1" runat="server">
            <asp:ScriptManager ID="scriptManager1" runat="server"></asp:ScriptManager>
            <div class="divLogoChat">
                <table>
                    <tr>
                        <td>
                            <img id="Img1" alt="" class="auto-style1" src="Imagenes/globoycarita.png" runat="server" />
                        </td>
                        <td aria-busy="False" aria-disabled="False" style="font-family: Calibri; font-size: medium; color: #FFFFFF; font-style: italic; font-weight: bold">
                            <img id="Img2" alt="" class="auto-style2" src="Imagenes/simichat-palabra.png" runat="server" /> v2.0.0</td>
                    </tr>
                </table>
            </div>
            <div id="divMostrarChat">
                <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                <asp:Panel ID="Panel2" runat="server">
                    <div class="divChat">
                        <asp:UpdatePanel ID="updateChat" runat="server">
                            <ContentTemplate>                                
                                <%--<asp:HiddenField ID="hiddenFieldIDUsuario" runat="server" />
                                <asp:HiddenField ID="hiddenFieldIDChat" runat="server" />--%>
                                <iframe id="Iframe2" src="Conversacion.aspx#principio" runat="server" frameborder="0" style="height: 238px; width:100%;"></iframe>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>
                    <div>
                        <table style="width: 242px">
                            <tr>
                                <td>
                                    <asp:UpdatePanel ID="updateEnviar" runat="server"><ContentTemplate>
                                        <dx:ASPxMemo ID="txtMensaje" runat="server" ClientInstanceName="txtMensaje" Height="26px" Style="margin-left: 0px" Width="181px">
                                            <ClientSideEvents KeyDown="function(s, e) {
                                    //Enviar.PerformCallback();
	if (e.htmlEvent.keyCode == 13){
        txtMensaje.Validate();
        if(txtMensaje.isValid){
		    Enviar.PerformCallback();
	
        }
    }
}" />
                                            <ValidationSettings SetFocusOnError="True" ValidationGroup="Enviar" ErrorDisplayMode="Text" ErrorTextPosition="Bottom">
                                                <RegularExpression ErrorText="*" />
                                                <RequiredField IsRequired="True" />
                                            </ValidationSettings>
                                        </dx:ASPxMemo>
                                    </ContentTemplate></asp:UpdatePanel>
                                </td>
                                <td valign="top">
                                    <dx:ASPxButton ID="btnEnviar" runat="server" Text="Enviar" Width="55px" AutoPostBack="False" ClientInstanceName="btnEnviar" ValidationGroup="Mensaje">
                                        <ClientSideEvents Click="function(s, e) {
	txtMensaje.Validate();
	if(txtMensaje.isValid){
		Enviar.PerformCallback();
	}
}" />
                                    </dx:ASPxButton>
                                </td>
                            </tr>
                        </table>
                    </div>
                </asp:Panel>
                                </ContentTemplate>
                    </asp:UpdatePanel>
            </div>
            <div id="divMostrarregistro">
                <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                            <ContentTemplate>
                <asp:Panel ID="Panel1" runat="server">
                        <table style="height: 101px; width:100%;">
                            <tr>
                                <td style="text-align: center">
                                    <dx:ASPxTextBox ID="txtNombre" runat="server" Width="180px" NullText="Ingresa tu nombre" ClientInstanceName="txtMensaje" MaxLength="50">
                                        <ClientSideEvents Init="function(s, e) {
	btnRegistrar.SetEnabled(true);
}" />
                                        <ValidationSettings SetFocusOnError="True" ValidationGroup="Registrar">
                                            <RequiredField IsRequired="True" />
                                        </ValidationSettings>
                                    </dx:ASPxTextBox>
                                </td>
                                </tr>
                            <tr>
                                <td style="text-align: center">
                                    <dx:ASPxButton ID="btnRegistrar" runat="server" Text="Registrar" Width="55px" AutoPostBack="False" ClientInstanceName="btnRegistrar"  ValidationGroup="Registrar" OnClick="btnRegistrar_Click">
                                        <ClientSideEvents Click="function(s, e) {
	txtMensaje.Validate();
    if(txtMensaje.isValid){
		//btnRegistrar.SetEnabled(false);
	}
}" />
                                    </dx:ASPxButton>
                                    <dx:ASPxCallback ID="ASPxCallback1" runat="server" ClientInstanceName="Enviar" OnCallback="ASPxCallback1_Callback">
                                        <ClientSideEvents CallbackComplete="function(s, e) {
    txtMensaje.Validate();
    if(txtMensaje.isValid){
		txtMensaje.Text=&quot;&quot;;
		txtMensaje.inputElement.innerHTML = &quot;&quot;;

        txtMensaje.SetText(&quot;&quot;);
    }
}" />
                                    </dx:ASPxCallback>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                                </ContentTemplate>
                    </asp:UpdatePanel>
            </div>
        </form>
    </div>
    <%--<div class="divCompleto">
        <iframe id="Iframe1" src="http://www.simiclubdeldiabetico.com/" runat="server" frameborder="0" style="height: 100%; width:100%;"></iframe>
    </div>--%>
</body>
</html>
