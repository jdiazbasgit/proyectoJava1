<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Mis Servicios Rest</title>
</head>
<body>
 <h1>Bienvenido a los servicios rest</h1>
 <a href="api">Pincha aqui para ver los servicios</a>
 <br>
 <a>Acceso a Log in</a>
 <form action='${pageContext.request.contextPath}/api/user'  method="post">
 	Name <input type="text" id="user" name="user"/>
 	Password <input type="password" id="password" name="password" />
 	<button type="submit">Enviar</button>
 </form>
</body>
</html>