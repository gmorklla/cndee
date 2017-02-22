<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="Chat_V2_Cliente.Test" %>

<%@ Register assembly="DevExpress.Web.v13.1, Version=13.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxEditors" tagprefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Ir al chat</title>
    <%--<script type="text/javascript">        
        window.close();
    </script>--%>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <dx:ASPxButton ID="ASPxButton1" runat="server" Text="Ir al Chat" Theme="iOS" EnableTheming="True">
            <ClientSideEvents Click="function(s, e) {
	window.open(&quot;Chat.aspx&quot;, &quot;_blank&quot;, &quot;toolbar=no, titlebar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=290, height=430&quot;);
}" />
        </dx:ASPxButton>
    
    </div>
    </form>
</body>
</html>
