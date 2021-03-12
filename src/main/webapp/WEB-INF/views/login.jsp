<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Usuario</title>
</head>
<body>


<form action="api/verLogin">
<input type="text" name="usuario"> <br>
<input type="password" name="clave"> <br>
<button type="submit">ENTRAR</button> <br>
</form>


<table>
<tr> 
<th>Usuario</th>
<th>Clave</th>
</tr>
<tr>
<td>${user} </td>
<td>${password} </td>
</tr>
</table>

</body>
</html>