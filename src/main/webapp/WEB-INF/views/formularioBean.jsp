<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


	<h1>formularioBean</h1>

	<spring:form action="verFormularioBean" modelAttribute="login">
	usuario:<spring:input path="usuario" />
		<br>
	clave:<spring:password path="clave" />
		<br>
		<input type="submit" value="aceptar">

	</spring:form>


	<!-- <form action="verFormulario">
		<input type="text" name="usuario"><br> <input
			type="password" name="clave"> <br> º
	</form> -->
</body>
</html>