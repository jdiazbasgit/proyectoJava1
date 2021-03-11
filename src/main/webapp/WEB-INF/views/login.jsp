<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Login</h1>
	<form action="api/verLogin" method="post">
		Usuario:<input type="text" name="user"><br>
		Clave:<input type="password" name="password"><br>
		<input type="submit" name="aceptar"><br>
	</form>
	
</body>
</html>