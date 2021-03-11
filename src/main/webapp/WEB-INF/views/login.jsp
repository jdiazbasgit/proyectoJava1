<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Login</h1>
	<form action="api/usuariosPass" method="post">
		Usuario:<input type="text" name="user"><br>
		Clave:<input type="password" name="password"><br>
		<input type="submit" name="aceptar"><br>
	</form>
</body>
</html>